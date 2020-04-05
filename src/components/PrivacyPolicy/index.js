import React, { PureComponent } from 'react';
import Layout from '../../sharedComponent/Layout';
import PrivacyPolicy from './PrivacyPolicy';

class PrivacyPolicyComponent extends PureComponent {
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
        	<PrivacyPolicy />
		</Layout>
      </>
    )
  }
}

export default PrivacyPolicyComponent;