import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import campaigns6 from "../../assets/images/campaigns_6.png";
import laptop from "../../assets/images/laptop.png";
import meeting from "../../assets/images/meeting.svg";

class BlogPost extends PureComponent {
  render() {
    const images = [
      {
        photo: campaigns6,
        alt: "mouse icon",
        heading: "NOT ALL SUPERHEROES WEAR CAPE",
        text: `Superheroes don’t have to wear capes like Superman, Batman, Spiderman or other characters made to depict a superhuman. What are the things that make these characters special? Superheroes are known to be special and out of the ordinary because they are reliable, consistent, caring, emphatic, selfless, thoughtful, the list goes on and on. The help they render to people in need is what really makes them special and admired by everyone. 
        The African community used to be a community of superheroes. People who are reliable, consistent, selfless, caring, thoughtful and helpful when needed. Stanford Encyclopedia of Philosophy rightly puts that two concepts feature prominently in the African culture, humanity which is to show compassion and brotherhood which is synonymous with alliance. We need these characters back amongst us. With attitudes such as these, we can solve the multiple problems plaguing the continent together.
        The question we need to ask ourselves include am I reliable, consistent, caring, selfless, thoughtful or helpful when needed? Will people come to my aid when I need them? 
        The power of helping is greatly under estimated by a lot of us. 
        We are calling on everyone, African and Non-African, Let’s build a better world. Be a Superhero without wearing a cape.
        `
      },
      {
        photo: laptop,
        alt: "medal icon",
        heading: "WHY CROWDFUNDING?",
        text: `Crowdfunding has become a popular way of financing projects when other and more traditional methods do not work. Generally it works by someone pitching the idea for their project and then other people invest in the project raising the money that is needed.
        
        History of Crowdfunding
        Crowdfunding is not a new concept and in fact it has been around before the internet provided crowdfunding websites. The most famous of early crowdfunding was the Stature of Liberty which was paid for by citizens of France and citizens of the United States.
        The internet however made crowdfunding more accessible. The first ever crowdfunding site was Artist share which started in 2003. Since then many crowdfunding sites have started and these include:
        1.	Kickstarter
        2.	RocketHub
        3.	Gofundme
        4.	Indiegogo
        The above list only contains a few of the most popular crowdfunding websites and there are many more that are appearing all the time.
        Types of Crowdfunding
        There are four main different types of crowdfunding which include:
        1.	Reward based
        2.	Lending based
        3.	Equity based
        4.	Donation based
        Ajoo.ng is a Donation based and Reward based crowdfunding platform so we will buttress on these two types of crowdfunding:
        1.	Donation Section: 
        This section of the platform is for donations. An individual, company or non-profit organization is backed by donors through the website with varying amount of money to be able to solve a particular financial problem.
        
        How it Works
        A user (campaigner) will create a campaign to raise fund for a particular problem on the website. This campaign is published on the website with a banner and description of the campaign. Users make donations to the various campaigns published with varying amount of money to assist the campaigner solve the problem which in return of the donation, the donors get a thank you or at the very best, a special mention. 
        Form of Return: Intangible benefits. 
        Motivation of Funder: Intrinsic and Social motivations.
        
        2.	Reward Section: 
        This section of the platform is funding for a particular reward. This section of the platform has nothing to do with ownership or financial repayment but satisfaction of assistance. 
        
        How it Works
        A fundraiser solicits for funding from the crowd on the platform for a pre-defined reward. The users make contributions to the various campaigns on the platform based on an already defined reward. For example, a user that plans to set up a fashion house but cannot afford to buy sewing machines can solicit for funds with the pre-defined reward of sewing cloths for a particular period for those that contribute to the purchase of the machines.
        Form of Return: Rewards but also intangible benefits.
        Motivation of Funder: Combination of intrinsic and social motivation and desire for reward.
        
        Popular Crowdfunding in Nigeria
        There are many different projects that have been funded by crowdfunding in Nigeria especially on social media. Popular crowdfunding on social media includes the case of the young boy who was born with a hole in his heart in 2019, Beniah , Nigerians raised 70 million for the young boy who unfortunately couldn’t make it. In  June 2017, the Punch newspapers along with some concerned individuals, launched a GoFundMe campaign where people contributed over $15,000 for the family of a late Nigerian police officer, Sergeant Chukwudi Iboko, who died after confronting a four-man gang in a gun battle during  a robbery incident at Zeniith Bank  Wetheral Road branch, Owerri, Imo State.
        
        Conclusion
        Crowdfunding is a popular way of raising money for many different projects. The majority are either charitable or entertainment based but is a way to get a good idea off the ground. In a climate where banks are either unable to or unwilling to lend money, this idea of crowdfunding is a strong alternative. Crowdfunding allows anyone to invest in a project or idea and it also allows people to fund their ideas when alternative methods just do not seem right.
        `
      },
      {
        photo: meeting,
        alt: "headphone icon",
        heading: "AJOO, CHANGING FUNDRAISING IN NIGERIA AND AFRICA",
        text: `Ajoo.ng is a powerful tool for social change in Nigeria and Africa as a whole. We provide access to capital for a segment of the population that cannot access it through traditional means. Our platform assists individuals or organizations in need of money to solve a problem easily assess it from the crowd which is not limited to well-meaning Nigerians and Africans. With our platform, a sick individual easily finds assistance, entrepreneurs easily find non-equitable funds and non-profits gain support from people with small donations.  
        Ajoo is synonymous with transparency, trust, site navigation ease, and mobile friendliness in the following ways:
        
        •    Our partnership with hospitals, special education centers, special medical initiatives, care homes, orphanages, charity homes, foundations, non-government and government organizations to ensure that every campaign on our platform is verified, raised by the right person and used to do what it is meant to do.
        •    Our platform also offers reward based donations where the donors get something back from the campaigner in return for their donation excluding shares, ownership claim, financial repayment and equity.
        •    Our platform incorporate local volunteer’s to engage and ensure that the trust of the donor’s are not betrayed. The volunteers help to oversee and ensure that the campaign is real.
        
        VOLUNTEERS
        
        For Ajoo, we are not just about crowdfunding, we are about community that wants to change fundraising in Nigeria and Africa. This is why, beyond raising money, it is important that we maintain the integrity of campaigns put up on this platform. While we cannot do this alone, the community can ensure that donations are made towards sincere causes.
        
        Register as a volunteer and help verify that campaigns are true and sincere. Not to worry, it is not too demanding and volunteers are assigned to campaigns based on location.
        
        Once registered as a volunteer, you get notified of campaigns with same geo-tag as your registered location. After reviewing the campaign details, and if comfortable with the information, you can then accept to be assigned to the campaign. Once assigned to the campaign, you can help take further steps to help verify the campaign.
        
        Such further steps include:
        •	Visiting the hospital in case of medical emergencies
        •	Phone interviews with the campaigner
        •	Where a safe neutral location can be agreed upon, meeting the campaigner in person
        
        Once satisfied with the situation and facts available, you can then recommend the campaign for a verified status. Campaigns with verified status are presumed to be true, sincere and worthy of support. Hence, volunteers should not recommend campaigns where there is any form of doubt at all.`
      }
    ];
    return (
      <div id="blog">
        <h2>From our Blog</h2>
        <div className="blog_row">
          {images.map((image, i) => (
            <div key={i} className="blog_column">
              <img src={image.photo} alt={image.alt} />
              <h5 style={{maxHeight: 200, overflow: "hidden"}}>
                <b>{image.heading}</b>
                <br/><br/>
                {image.text}
              </h5>
              <a href="https://www.medium.com/ajoo-notes" target="_blank">Read More</a>
            </div>
          ))}
        </div>
        <div className="button_home">
          <div className="heading_button">
            <a href="https://www.medium.com/ajoo-notes">
              <p className="heading_button_text">visit blog</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
