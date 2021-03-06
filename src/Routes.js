import React, { Component } from "react";
import { Router, Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import history from "./utils/@history";
import { connect } from "react-redux";

import AuthService from "./services/authServices";

import {
  HomeContainer,
  CampaignContainer,
  CampaignsContainer,
  CreateCampaignContainer,
  EditCampaignContainer,
  SignInContainer,
  SignUpContainer,
  ProfileContainer,
  PrivacyPolicyContainer,
  TermsOfUseContainer,
  IndividualProfileSettingContainer,
  OrganizationProfileSettingsContainer,
  VolunteerContainer,
  VerifiedPagesContainer,
  VerifiedOrganisationContainer,
  BlogContainer,
  BlogArticleContainer,
  SignUpIndividualContainer,
  SignUpOrganisationContainer,
  SignUpVerificationContainer,
  PhoneConfirmationContainer,
  CampaignFeatureImageContainer,
  FaqContainer,
  VolunteerVerificationContainer,
  HowItWorksContainer,
  ProfilePhotoUploadContainer,
  SuccessContainer,
  AboutContainer,
  VolunteerDocumentContainer,
  HelpSupportContainer,
  ResetPasswordContainer,
  ForgotPasswordContainer,
  EmailVerificationContainer,
  EmailSentContainer,
  SupportSentContainer,
  CloseCampaignContainer
} from "./container";
import { setUserData } from "./store/allActions";
import PrivateRoute from "./sharedComponent/PrivateRoute";

let routes = {
  publicRoutes: [
    { path: "/", exact: true, component: HomeContainer },
    {
      path: "/campaign/:campaignId",
      exact: true,
      component: CampaignContainer
    },
    { path: "/campaign", exact: true, component: () => <Redirect to={{ pathname: "/campaigns", state: {} }} /> },
    { path: "/campaigns", exact: true, component: CampaignsContainer },
    { path: "/signin", exact: true, component: SignInContainer },
    { path: "/signup", exact: true, component: SignUpContainer },
    { path: "/signout", exact: true, component: () => <Redirect to={{ pathname: "/signin", state: {} }} /> },
    { path: "/privacy-policy", exact: true, component: PrivacyPolicyContainer },
    { path: "/terms_of_use", exact: true, component: TermsOfUseContainer },
    { path: "/volunteer", exact: true, component: VolunteerContainer },
    // { path: "/non_volunteer", exact: true, component: NonVolunteerContainer },
    { path: "/verified_page", exact: true, component: VerifiedPagesContainer },
    {
      path: "/verified_org_campaigns/:organizationId",
      exact: true,
      component: VerifiedOrganisationContainer
    },
    { path: "/blog", exact: true, component: BlogContainer },
    { path: "/blog_articles", exact: true, component: BlogArticleContainer },
    {
      path: "/signup_individual",
      exact: true,
      component: SignUpIndividualContainer
    },
    {
      path: "/signup_org",
      exact: true,
      component: SignUpOrganisationContainer
    },
    {
      path: "/campaign_image",
      exact: true,
      component: CampaignFeatureImageContainer
    },
    { path: "/faq", exact: true, component: FaqContainer },
    {
      path: "/verify_volunteer",
      exact: true,
      component: VolunteerVerificationContainer
    },
    {
      path: "/verify_email/:token",
      exact: true,
      component: EmailVerificationContainer
    },
    {
      path: "/how_it_works",
      exact: true,
      component: HowItWorksContainer
    },
    {
      path: "/reset_password/:token",
      exact: true,
      component: ResetPasswordContainer
    },
    {
      path: "/forgot_password",
      exact: true,
      component: ForgotPasswordContainer
    },
    {
      path: "/send_email",
      exact: true,
      component: EmailSentContainer
    },
    {
      path: "/success_stories",
      exact: true,
      component: SuccessContainer,
    },
    {
      path: "/about",
      exact: true,
      component: AboutContainer
    },
    {
      path: "/volunteer_document",
      exact: true,
      component: VolunteerDocumentContainer
    },
    {
      path: "/help",
      exact: true,
      component: HelpSupportContainer
    },
    {
      path: "/support_sent",
      exact: true,
      component: SupportSentContainer
    }
  ],
  privateRoutes: [
    {
      path: "/verify",
      exact: true,
      component: SignUpVerificationContainer
    },
    {
      path: "/create_campaigns",
      exact: true,
      component: CreateCampaignContainer
    },
    {
      path: "/edit_campaign",
      exact: true,
      component: EditCampaignContainer
    },
    {
      path: "/close_campaign",
      exact: true,
      component: CloseCampaignContainer
    },
    { path: "/profile", exact: true, component: ProfileContainer },
    {
      path: "/confirm_phone",
      exact: true,
      component: PhoneConfirmationContainer
    },
    {
      path: "/upload_profile_photo",
      exact: true,
      component: ProfilePhotoUploadContainer
    },
    {
      path: "/profile_setting/individual",
      exact: true,
      component: IndividualProfileSettingContainer
    },
    {
      path: "/profile_setting/organization",
      exact: true,
      component: OrganizationProfileSettingsContainer
    }
  ]
};

class Routes extends Component {
  componentDidMount() {
    if (AuthService.isAuthenticated()) {
      AuthService.fetchUser().then(user => {
        if (user.status.code === 100) {
          this.props.setUserData(user.entity.me);
        }
      });
    }
  }

  render() {
    return (
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            {routes.publicRoutes.map(el => (
              <Route
                key={el.path}
                exact={el.exact}
                component={el.component}
                path={el.path}
              />
            ))}
            {routes.privateRoutes.map(el => (
              <PrivateRoute
                key={el.path}
                exact={el.exact}
                component={el.component}
                path={el.path}
              />
            ))}
            <Route path="/404" component={() => <div style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 200
            }}>404</div>} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
  request: auth.request
});

const mapDispatchToProps = {
  setUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
