import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
class CampaignIndex extends Component{
  // static means the fn is a member of the class itself and not its instance
  // next wants to do some initial data fetching without rendering anything for efficiency
  // hence it requires the static keyword before the fn.
  // getIntialProps() is for data fetching specifically for next.js
  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    // return an object which will be provided to our component as props
    return { campaigns };
  }
  renderCampaigns(){
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      }
    });

    return <Card.Group items={items} />;
  }
  render(){
    //semantic-ui has a package but next.js does not support module loading yet... so we add a link w a stylesheet

    return(
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button 
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          <div>{this.renderCampaigns()}</div>

        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;