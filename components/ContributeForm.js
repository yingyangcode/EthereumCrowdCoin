import React, {Component} from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state={
    value: '',
    errorMessage: '',
    loading:false
  };
  
  onSubmit = async event => {
    event.preventDefault();
    // ContributeForm has access to this.props.address coming from CampaignShow comp in show.js
    // Campaign takes an address and creates an instance of a campaign and returns it
    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts=await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
      // we pass in the url of the current page we are looking at
      // this causes the page to refresh
      // this.props.address is the address of the current campaign we are looking at
      // so its saying refresh the page and run getInitialProps again
      // refetch data from campaign so that data is updated
      Router.replaceRoute(`/campaigns/${this.props.address}`)
    }catch(err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: '' });

  };

  render() {
    return(
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
        </Form.Field>
        <Input 
          value={this.state.value}
          onChange={event => this.setState({value: event.target.value})}
          label="ether"
          labelPosition="right"
        />
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;