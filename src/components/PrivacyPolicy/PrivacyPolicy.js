import React, { PureComponent } from 'react';

class PrivacyPolicy extends PureComponent {
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
      <div class="terms_of_use">
      <h2>Privacy Policy</h2>
      <div class="card">
          <div class="card-body">
          Privacy Policy 


          Privacy Policy 

Ajoo’s Privacy Policy 

Our Privacy Policy effective from the 1st of March 2020. 

We are aware that you care how Personal Information about you is collected, used, shared and stored. “Personal Information” means information which personally identifies you or another.

This Privacy Policy explains what Personal Information will be collected by Ajoo when you use our Website: https://www.ajoo.ng and related services (the “Service“), how Personal Information will be used, and how you can control the collection, correction and/or deletion of Personal Information.

Informations We Collect 

In order for you to create an account on ajoo.ng and use our services, we need to collect and process some information. Depending on your use of the Services which may include:

1.	Information (such as your name, email, telephone number, state of residence, home address, social media information, Identification Number on Nigerian International Passport, National ID Card, Student ID Card) that you provide by completing forms on Ajoo, including if you register as a user of the Services, subscribe to our newsletters, upload or submit any material through Ajoo, or request any information;
2.	your login and password details, in connection with the account sign-in process;
3.	details of any requests or transactions you make through the Services;
4.	information about your activity on and interaction with Imeela, such as your IP address and the type of device or browser you use;
5.	communications you send to us (for example, when you ask for support, send us questions or comments, or report a problem); and
6.	information that you submit to Ajoo in the form of comments, contributions to discussions, or messages to other users.

What We Keep Private 

This data will not be publicly displayed or revealed to other users:
1.	any payment information you provide
2.	your password details
3.	your IP address
4.	your phone number
5.	communications you send to us (for example, when you ask for support, send us questions or comments, or report a problem)

We will not give your personal information to any third-party services, except when it’s necessary to provide Ajoo’s Services (like when we partner with payment processors). When we share data with third-party services that support our delivery of the Ajoo Services, we require that they protect your personal information to the same standards we do.

We do reserve the right to disclose personal information when we believe that doing so is reasonably necessary to comply with the law or law enforcement, to prevent fraud or abuse, or to protect Ajoo’s legal rights.

Information Shared With Campigners 

When you donate to a campaign, the campaigner will know your account name, the amount you donated, and the reward you have selected. Campaigners never receive donors’ credit card details or other payment information.

If a campaign you have donated to is successfully funded, the campaigner will receive the email address associated with your Ajoo account. They may also send you surveys requesting information needed to provide your reward. (For instance, they may need your mailing address, or t-shirt size.) Any information you provide in such surveys will be received by the campaigner.

Campigners may also receive anonymous information about the ways people visit and interact with their campaign pages, in the form of routine traffic analytics.

What We Make Public

When you create an account, we create a basic profile page for you on Ajoo, containing your account name, the date the account was created, and a list of projects you have donated or launched. Whenever your account name appears on Ajoo (for instance, when you post comments, send messages, or donate to campaigns), people can click your account name to see your profile. The profile is not searchable on Ajoo or via search engines like Google. Here are some of the things that will be publicly viewable on your profile, or elsewhere on Ajoo:

1.	the account name, and the date it was created
2.	any information you choose to add to your profile (like a picture, bio, or your location)
3.	Campaigns you’ve donated to (but not pledge amounts or rewards chosen)
4.	Campaigns you have created 
5.	comments you posted on Ajoo
6.	if you have “Liked” a campaign update

Please note that each campaign page lists the community of users who have backed the project. If you do not want others to see your name in a donors tab, click on anonymous and your donation will be anonymous to others except Ajoo admin.

Campaigners are also asked to verify their identities before launching a campaign. Once this has been done, the Campigner’s Verified Name will be publicly displayed on their account profile and on any campaign they launch.

Use of Personal Information 

We will use the personal information you provide to

1.	identify you when you sign in to your account;
2.	enable us to provide you with the Services;
3.	send you marketing communications we think you may find useful, but only in accordance with your email preferences;
4.	present projects to you when you use the Services which we believe will be of interest based on your geographic location and previous use of the Services;
5.	administer your account with us;
6.	enable us to contact you regarding any question you make through the Services;
7.	analyze the use of the Services and the people visiting to improve our content and Services; and
8.	use for other purposes that we may disclose to you when we request your information.

We take securing your data and preserving your privacy very seriously. We never post anything to your Facebook, Twitter, or other third-party accounts without your permission. Ajoo campaigners never receive donors’ credit card details or other payment information. We do not and will not sell your data.

Communication Channel 

We want to communicate with you only if you want to hear from us. We try to keep emails to a minimum and give you the ability to opt out of any marketing communications we send.

We will send you email relating to your personal transactions. You will also receive certain marketing email communications, in accordance with your preferences, and from which you may opt out at any time.

We may send you service-related announcements on the rare occasions when it is necessary to do so.

Modification of Personal Information 

To modify or delete the personal information you have provided to us, please log in and update your profile. We may retain certain information as required by law or for necessary business purposes.

On request, we will give you a copy of all the personal information about you that we hold. This information is subject to a fee not exceeding the prescribed fee permitted by law.

People under 18 (or the legal age in your jurisdiction) are not permitted to use Ajoo on their own, and so this privacy policy makes no provision for their use of Ajoo.

Information that you submit through the Services may be transferred to countries other than where you reside (for example, to our servers with Amazon Web Services). We will protect all information we receive in accordance with this privacy policy.

Privacy Policy Changes 

If we make a material change to our privacy policies and procedures as to the collection, use or disclosure of your Personal Information, we will post a notice of those changes on our Website or notify you by email (sent to the email address specified in your account) to keep you aware of what information we collect, how we use it and under what circumstances we may disclose it, prior to the change becoming effective. You are bound by changes to the Privacy Policy when you use the site after those changes have been posted. We encourage you to periodically review this page for the latest information on our privacy  
policy. 

Enquires  

If you have questions or suggestions, please contact us at info@ajoo.ng or +234 807 605 5051. 

          
          </div>
      </div>
  </div>

  <hr id="footer_hr" />
      </>
    )
  }
}

export default PrivacyPolicy;