import React, { PureComponent } from "react";

class TermsOfUse extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
  }

  _safelySetState = (newState, prevState = []) => {
    if (this._isMounted)
      this.setState(state => {
        let toggledState = {};
        prevState.map(el => {
          toggledState[el] = !state[toggledState];
        });
        return {
          ...toggledState,
          ...newState
        };
      });
  };

  render() {
    return (
      <>
        <div className="terms_of_use">
          <h2>Terms of Use</h2>
          <div className="card">
            <div className="card-body">
              <h1>Updated Feb 28, 2020</h1>
              <hr />
              <h4><b>Ajoo.ng Terms of Use</b></h4>
              <br />
              <br />
              <h4><b>Our Term of use effective from the 1st of March 2020.</b></h4>
              <br />
              <h5>
                By using ajoo.ng (the “website”, “Site”) and services (together with the website, the “Services”) offered by AjooFunds Global Tech Limited (together with its parents, subsidiaries, affiliates, agents, representatives, consultants, employees, officers, and directors — collectively, “Ajoo,” “we,” or “us”), you are agreeing to these legally binding rules, our Privacy Policy, all applicable laws and all conditions or policies referenced here (collectively, the “Terms”). We may change these terms from time to time. If we do, we will let you know about any material changes, either by notifying you on the Site or by sending you an email. New versions of the terms will never apply retroactively — we will tell you the exact date they go into effect. If you keep using Imeela after a change, that means you accept the new terms.
              </h5>
              <h4><b>Introduction and Definition of Terminology.</b></h4>
              <br />
              <br />
              <h5>
                In these Terms, we refer to those raising funds as “Campaigners” and to their fundraising campaigns as “Campaigns.” We refer to those contributing funds as “Donors”, to the funds they contribute as “Donations” and to those who vet and monitor contributions as “volunteers”. Campaigners, Donors, Volunteers and other visitors to the Services are referred to collectively as “Users.”
              </h5>
              <h4><b>User’s Account Creation</b></h4>
              <br />
              <br />
              <h5>
                You can browse Ajoo without registering for an account. But to use some of Ajoo’s functions, you will need to register, choose an account name, and set a password. When you do that, the information you give us has to be accurate and complete. Do not impersonate anyone else or choose names that are offensive or that violate anyone’s rights. If you don’t follow these rules, we may cancel your account.
                <br /><br />
                You are responsible for all the activities on your account, and for keeping your password confidential. If you find out that someone has used your account without your permission, you should report it to
                   <a href="mailto:support@ajoo.ng">support@ajoo.ng</a>
                <br /><br />
                To sign up for an account, you need to be at least 18 years old, or old enough to form a binding contract where you live. We request for identification as part of our vetting process which could include but not limited to the National ID Card, Nigerian International Passport, Nigerian drivers license and student ID card. We may ask you for proof of age. Users under 18 years of age are not eligible to use the Services without consent. Users between the ages of 13 and 17 years, can use the Services with the consent and supervision of a parent or legal guardian who is at least 18 years old, provided such parent or legal guardian also agrees to be bound by the Terms and agrees to be responsible for such use of the Services.
              </h5>
              <br /><br /><br />
              <h4><b>User’s Limitation on the Website </b></h4>
              <br /><br />
              <h4>Don’t do any of these things on ajoo.ng:</h4>
              <br /><br />
              <ul>
                <li>
                  <h5>
                    Do not break the law. Don’t take any action that infringes or violates other people’s rights, violates the law, or breaches any contract or legal duty you have toward anyone.
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not lie to people. Don’t post information you know is false, misleading, or inaccurate. Do not do anything deceptive or fraudulent.
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not offer prohibited items. Do not offer any rewards that are illegal, violate any of Ajoo’s policies, rules, or guidelines, or violate any applicable law, statute, ordinance, or regulation.
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not victimize anyone. Do not do anything threatening, abusive, harassing, defamatory, libelous, tortious, obscene, profane, or invasive of another person’s privacy.
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not spam. Do not distribute unsolicited or unauthorized advertising or promotional material, or any junk mail, spam, or chain letters. Do not run mail lists, listservs, or any kind of auto-responder or spam on or through the Site.
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not harm anyone’s computer. Do not distribute software viruses, or anything else (code, films, programs) designed to interfere with the proper function of any software, hardware, or equipment on the Site (whether it belongs to Imeela or another party).
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not abuse other users’ personal information. When you use Ajoo — and especially if you create a successful campaign — you may receive information about other users, including things like their names, email addresses, and postal addresses. This information is provided for the purpose of participating in community of volunteers and donors: do not use it for other purposes, and do not abuse it.”
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not try to interfere with the proper workings of the Services.
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not bypass any measures we have put in place to secure the Services.
                    </h5>
                </li>
                <li>
                  <h5>
                    Do not try to damage or get unauthorized access to any system, data, password, or other information, whether it belongs to Imeela or another party.
                </h5>
                </li>
                <li>
                  <h5>Do not take any action that imposes an unreasonable load on our infrastructure, or on our third-party providers. (We reserve the right to determine what is reasonable.)
                </h5>
                </li>
                <li>
                  <h5>
                    Do not use any kind of software or device (whether it’s manual or automated) to “crawl” or “spider” any part of the Site.
                  </h5>
                </li>
                <li>
                  <h5>
                    Do not take apart or reverse engineer any aspect of Ajoo in an effort to access things like source code, underlying ideas, or algorithms.
                  </h5>
                </li>
              </ul>
              <br /><br />
              <h5>
                Ajoo reserves the right to remove Campaigns and terminate User Accounts for any of the activities mentioned above and others actions that might trespass and hurt others using the services.
              </h5>
              <br />
              <br />
              <br />
              <h4><b>Campaigns on Ajoo.ng</b></h4>
              <br />
              <br />
              <h5>
                Ajoo is an online crowdfunding platform for individuals and organizations seeking to raise funds for their own Campaigns and to contribute to the Campaigns of others. Campigners can offer gifts or rewards in the form of tangible items or intangible services (collectively, “Rewards“) to Donors. Rewards are not offered for sale. Ajoo makes no representations about the quality, safety, morality or legality of any Campaign, Rewards or Contribution or the truth or accuracy of User Content (as defined below) posted on the Services. Ajoo does not represent that Campigners will deliver Rewards. Users use the Services at their own risk.
              </h5>
              <br /><br />
              <h5>
                The campaigner is solely responsible for fulfilling the promises made in their project. If they are unable to satisfy the terms of this agreement, they may be subject to legal action by donors and Ajoo.
              </h5>
              <br /><br />
              <h4><b>Disallowed Rewards </b></h4>
              <br /><br />
              <h4>
                Campaigners  are not permitted to offer or provide any of the following as a reward:
                </h4>
              <br />
              <ul>
                <li>
                  <h5>
                    any form of “security” (as such term is defined in the Securities Act of 2007);
                  </h5>
                </li>
                <li>
                  <h5>
                    any form of financial incentive or participation in any profit sharing;
                    </h5>
                </li>
                <li>
                  <h5>
                    any alcoholic consumer products (vouchers or memberships offering physical delivery of alcoholic consumer products are permitted);
                    </h5>
                </li>
                <li>
                  <h5>any controlled substance or drug paraphernalia;</h5>
                </li>
                <li>
                  <h5>any weapons, ammunition and related accessories;</h5>
                </li>
                <li>
                  <h5>any form of lottery or gambling;</h5>
                </li>
                <li>
                  <h5>any form of air transportation; or</h5>
                </li>
                <li>
                  <h5>
                    any items promoting hate, discrimination, personal injury, death, damage, or destruction to property; or any items (a) prohibited by applicable law to possess or distribute, (b) that would violate applicable law if distributed, or (c) that would result in infringement or violation of another person’s rights if distributed.
                </h5>
                </li>
              </ul>
              <br /><br /><br />
              <h4><b>User License</b></h4>
              <br /><br />
              <h5>
                Ajoo grants each User a limited, non-exclusive, non-transferable, revocable license to use the Services subject to such User’s eligibility and continued compliance with the Terms.
              </h5>
              <br /><br />
              <h4><b>Campaigners</b></h4>
              <br /><br />
              <h5>
                Campaigners are permitted to offer rewards to donors. Campaigners are legally bound to perform on any promise and/or commitment to donors (including delivering any reward). Campaigners will respond promptly and truthfully to all questions posed to them by Ajoo or any donor. If any campigner is unable to fulfill any of its commitments to donors (including delivering any reward), the Campaigner will work with the donors and ajoo to reach a mutually satisfactory resolution, which may include refunding the donors. Campaigners will comply with all applicable laws and regulations in the use of Contributions and delivery of rewards. Campaigners are responsible for collecting and remitting any taxes on Contributions, and any taxes due in connection with rewards. Ajoo will attempt to verify the identity and other information provided to us by Campaigners, and we may delay, withhold, reverse or refund any Contributions or other amounts without notice or liability in the event we are unable to verify any such information to our satisfaction.
              </h5>
              <br /><br />
              <h4><b>Donors</b></h4>
              <br /><br />
              <h5>
                Donors are partly responsible for asking questions and investigating campaigners and Campaigns to the extent they feel is necessary before making a donation. All donation are made voluntarily and at the sole discretion and risk of the donor. Ajoo guarantee’s that donations will be used as promised, Ajoo does not however guarantee that campaigners will deliver rewards, or that the Campaign will achieve its goals. Ajoo does not endorse, guarantee, make representations, or provide warranties for or about the quality, safety, morality or legality of any Campaign, reward or donation, or the truth or accuracy of User Content posted on the Services. Donors are partly responsible for determining how to treat their donations and receipt of any reward for tax purposes. If a donation is returned to a donor, the associated reward, if any, shall be cancelled.
              </h5>
              <br /><br />
              <h4><b>Ajoo’s Limitation </b></h4>
              <br /><br />
              <h5>
                Ajoo will not be liable for any damages or losses related to your use of the Services. We do not become involved in disputes between users, or between users and any third party relating to the use of the Services. We do not oversee the performance or punctuality of projects, and we do not endorse any content users submit to the Site. When you use the Services, you release ajoo from claims, damages, and demands of every kind — known or unknown, suspected or unsuspected, disclosed or undisclosed — arising out of or in any way related to such disputes and the Services. All content you access through the Services is at your own risk. You are solely responsible for any resulting damage or loss to any party.
              </h5>
              <br /><br />
              <h4><b>Fees</b></h4>
              <br /><br />
              <h5>
                Creating an account on Ajoo is free. We do not charge our Service fees to donors. Unless otherwise expressly indicated on the Services, we do charge our Service fees to campaigners as a portion of the Contributions they raise. We will not collect any fees without giving you a chance to review and accept them. If our fees ever change, we’ will announce that on our Site. Updated Service Fees are applied to Campaigns launched after the notice is posted.
                <br /><br />
                Some funds pledged by Contributors are collected by payment providers. Each payment provider is its own company, and Ajoo is not responsible for its performance. The payments are made to the account of AjooFunds Global Tech Limited, and are held on trust for the duration of the campaign. By using the Services Users agree to our Service Fees.
                <br /><br />
                You’re responsible for paying any additional fees or taxes associated with your use of Ajoo.
              </h5>
              <br /><br />
              <h4><b>Refund Policy</b></h4>
              <br /><br />
              <h5>
                Campaigners keep each and every donation they receive. Contributors are eligible for a refund if ajoo determines that there has been an abuse of these Terms of Use and the funds have not been transferred. Ajoo reserves the right to terminate User Accounts and remove Campaigns for any abuse of this refund policy. For Campaigns that have ended, or in situations where the contribution funds have been transferred to the Campaigners, donors should contact the Campaigner directly regarding refunds.
              </h5>
              <br /><br />
              <h4><b>Taxes</b></h4>
              <br /><br />
              <h5>
                Taxing authorities may classify funds raised on the Services as taxable income to the Campaigners and any beneficiary who will receive funds directly from the applicable Campaign.
                </h5>
              <br /><br />
              <h4><b>External Websites</b></h4>
              <br /><br />
              <h5>
                Ajoo may contain links to other websites. (For instance, project pages, user profiles, and comments may link to other sites.) When you access third-party websites, you do so at your own risk. We don’t control or endorse those sites.
                <br /><br />
                Ajoo payment is processed by paystack and banks. When you back or create a campaign, you are also agreeing to the payment processor’s terms of service.
              </h5>
              <br /><br />
              <h4><b>User’s Intellectual Property</b></h4>
              <br /><br />
              <h5>
                Ajoo does not own the content you submit to us (your “Content”). But we do need certain licenses from you in order to perform our Services. When you submit a campaign for review, or launch a campaign, you agree to these terms:
              </h5>
              <br /><br />
              <ul>
                <li>
                  <h5>
                    We can use the content you have You grant to us, and others acting on our behalf, the worldwide, non-exclusive, perpetual, irrevocable, royalty-free, sub licensable, transferable right to use, exercise, commercialize, and exploit the copyright, publicity, trademark, and database rights with respect to your Content.
                  </h5>
                </li>
                <li>
                  <h5>
                    When we use the content, we can make changes, like editing or translating it. You grant us the right to edit, modify, reformat, excerpt, delete, or translate any of your Content.
                  </h5>
                </li>
                <li>
                  <h5>
                    You will not submit stuff you do not hold the copyright for (unless you have permission). Your Content will not contain third-party copyrighted material, or material that is subject to other third-party proprietary rights, unless you have permission from the rightful owner of the material, or you are otherwise legally entitled to post the material (and to grant ajoo all the license rights outlined here).
                  </h5>
                </li>
                <li>
                  <h5>
                    Any royalties or licensing on your Content are your responsibility. You will pay all royalties and other amounts owed to any person or entity based on your Content, or on ajoo’s hosting of that Content.
                  </h5>
                </li>
                <li>
                  <h5>
                    You promise that if we use your Content, we are not violating anyone’s rights or copyrights. If Ajoo or its users exploit or make use of your submission in the ways contemplated in this agreement, you promise that this will not infringe or violate the rights of any third party, including (without limitation) any privacy rights, publicity rights, copyrights, contract rights, or any other intellectual property or proprietary rights.
                  </h5>
                </li>
                <li>
                  <h5>
                    You are responsible for the stuff you post. All information submitted to the Site, whether publicly posted or privately transmitted, is the sole responsibility of the person from whom that content originated.
                  </h5>
                </li>
                <li>
                  <h5>
                    We are not responsible for mistakes in your content. Ajoo will not be liable for any errors or omissions in any content.
                  </h5>
                </li>
              </ul>
              <br /><br /><br />
              <h4><b>Ajoo’s Intellectual Property</b></h4>
              <br /><br />
              <h5>
                Ajoo’s Services are legally protected in various ways, including copyrights, trademarks, service marks, patents, trade secrets, and other rights and laws. You agree to respect all copyright and other legal notices, information, and restrictions contained in any content accessed through the Site. You also agree not to change, translate, or otherwise create derivative works of the Service.
              <br /><br />
                Ajoo grants you a license to reproduce content from the Services for personal use only. This license covers both Ajoo’s own protected content and user-generated content on the Site. (This license is worldwide, non-exclusive, non-sub licensable, and non-transferable.) If you want to use, reproduce, modify, distribute, or store any of this content for a commercial purpose, you need prior written permission from Ajoo or the relevant copyright holder. A “commercial purpose” means you intend to use, sell, license, rent, or otherwise exploit content for commercial use, in any way.
              </h5>
              <br /><br />
              <h4><b>Our Action towards Copyright</b></h4>
              <br />
              <br />
              <h5>
                The Copyright Act lays out a system of legal requirements for dealing with allegations of copyright infringement. Ajoo complies with the Copyright Act, and we respond to notices of alleged infringement if they comply with the law and the requirements set forth in our Copyright Policy. We reserve the right to delete or disable content alleged to be infringing, and to terminate accounts for repeat infringers. (We do this when appropriate and at our sole discretion.)
              <br /><br />
                To submit a claim of copyright infringement, you can send a mail to  <a href="mailto:admin@ajoo.ng">admin@ajoo.ng</a>
              </h5>
              <br /><br />
              <h4><b>Deletion of Users Account</b></h4>
              <br /><br />
              <h5>
                You can terminate your account at any time. All provisions of this agreement survive termination of an account, including our rights regarding any content you’ve already submitted to the Site. (For instance, if you’ve launched a campaign, deleting your account will not remove the project from the Site.)
              </h5>
              <br /><br />
              <h4><b>Ajoo’s Rights</b></h4>
              <br /><br />
              <h5>Ajoo reserves these rights:</h5>
              <br /><br />
              <ul>
                <li>
                  <h5>
                    We can make changes to the Ajoo.ng Site and Services without notice or liability.
                  </h5>
                </li>
                <li>
                  <h5>
                    We have the right to decide who is eligible to use Ajoo . We can cancel accounts or decline to offer our Services. (Especially if you are abusing them.) We can change our eligibility criteria at any time. If these things are prohibited by law where you live, then we revoke your right to use Imeela in that jurisdiction.
                  </h5>
                </li>
                <li>
                  <h5>
                    We have the right to cancel any pledge to any project, at any time and for any reason.
                  </h5>
                </li>
                <li>
                  <h5>
                    We have the right to reject, cancel, interrupt, remove, or suspend any project at any time and for any reason.
                  </h5>
                </li>
                <li>
                  <h5>
                    Ajoo is not liable for any damages as a result of any of these actions, and it is our policy not to comment on the reasons for any such action.
                  </h5>
                </li>
              </ul>
              <br /><br /><br />
              <h4><b>Our Policy with Cooperation with Local Authorities and Police </b></h4>
              <br /><br />
              <h5>
                We will cooperate with law enforcement authorities as required by law. We will cooperate with law enforcement agencies in any investigation of alleged illegal activity regarding the use of the Services when requested.
                </h5>
              <br /><br /><br />
              <h4><b>Warranty Disclaimer</b></h4>
              <br /><br />
              <h5>
                You use our Services solely at your own risk. They are provided to you “as is” and “as available” and without warranty of any kind, express or implied.
              <br /><br />
                AJOO SPECIFICALLY DISCLAIMS ANY AND ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. NO ADVICE OR INFORMATION (ORAL OR WRITTEN) OBTAINED BY YOU FROM AJOO SHALL CREATE ANY WARRANTY.
              </h5>
              <br /><br /><br />
              <h4><b>Indemnity</b></h4>
              <br /><br />
              <h5>
                If you do something that gets us sued, or break any of the promises you make in this agreement, you agree to defend, indemnify, and hold us harmless from all liabilities, claims, and expenses (including reasonable attorneys’ fees and other legal costs) that arise from or relate to your use or misuse of Ajoo. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to this indemnification clause, in which case you agree that you will cooperate and help us in asserting any defenses.
              </h5>
              <br /><br />
              <h4><b>Liability Limitation</b></h4>
              <br /><br />
              <h5>
                To the fullest extent permitted by law, in no event will Ajoo, its directors, employees, partners, suppliers, or content providers be liable for any indirect, incidental, punitive, consequential, special, or exemplary damages of any kind, including but not limited to damages (i) resulting from your access to, use of, or inability to access or use the Services; (ii) for any lost profits, data loss, or cost of procurement or substitute goods or services; or (iii) for any conduct of content of any third party on the Site. In no event shall Ajoo’s liability for direct damages be in excess of (in the aggregate) ten thousand Naira only (10,000).
              </h5>
              <br /><br /><br />
              <h4><b>Dispute Resolution</b></h4>
              <br /><br />
              <h5>
                We at Ajoo encourage you to contact us if you are having an issue, before resorting to the courts. In the unfortunate situation where legal action does arise, these Terms (and all other rules, policies, or guidelines incorporated by reference) will be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without giving effect to any principles of conflicts of law, and without application of the Uniform Computer Information Transaction Act or the United Nations Convention of Controls for International Sale of Goods. You agree that Ajoo and its Services are deemed a passive website that does not give rise to jurisdiction over Imeela or its parents, subsidiaries, affiliates, assigns, employees, agents, directors, officers, or shareholders, either specific or general, in any jurisdiction other than the Federal Republic of Nigeria. You agree that any action at law or in equity arising out of or relating to these Terms, or your use or non-use of Ajoo, shall be filed only in the state or federal courts located in Federal Republic of Nigeria and you hereby consent and submit to the personal jurisdiction of these courts for the purposes of litigating any such action. You hereby irrevocably waive any right you may have to trial by jury in any dispute, action, or proceeding.
              </h5>
              <br /><br />
              <h4><b>Conclusion</b></h4>
              <br /><br />
              <h5>
                These Terms and the other material referenced in them are the entire agreement between you and Ajoo with respect to the Services. They supersede all other communications and proposals (whether oral, written, or electronic) between you and Ajoo with respect to the Services and govern our future relationship. If any provision of these Terms is found to be invalid under the law, that provision will be limited or eliminated to the minimum extent necessary so that the Terms otherwise will remain in full force and effect and enforceable. The failure of either you or Ajoo to exercise any right provided for in these Terms in any way won’t be deemed a waiver of any other rights.
                <br /><br />
                These Terms are personal to you. You cannot assign them, transfer them, or sublicense them unless you get Ajoo’s prior written consent. Ajoo has the right to assign, transfer, or delegate any of its rights and obligations under these Terms without your consent. Ajoo will provide you notice via email, written notice, or by conspicuously posting the notice on our Site.
              </h5>
            </div>
          </div>
        </div>

        <hr id="footer_hr" />
      </>
    );
  }
}

export default TermsOfUse;
