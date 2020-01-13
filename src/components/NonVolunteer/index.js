import React, { PureComponent } from 'react';
import Layout from '../../sharedComponent/Layout';
import NonVolunteer from './NonVolunteer';
import StartCampaign from '../../sharedComponent/StartCampaign';

class NonVolunteerComponent extends PureComponent {
	constructor(props){
		super(props);
		this._isMounted = false;
		this.state = {
		}
	}

	componentDidMount() {
		this._isMounted = true;
	}

	_safelySetState = (newState, prevState = null) => {
		if(this._isMounted) 
			return this.setState((state) => ({
				[prevState]: !state[prevState],
				...newState
			}));
	}

	render () {
    return (
      <>
				<Layout>
          <NonVolunteer />
					<StartCampaign />
				</Layout>
      </>
    )
  }
}

export default NonVolunteerComponent;