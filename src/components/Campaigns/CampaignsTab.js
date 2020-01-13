import React, { PureComponent } from 'react'

class CampaignTab extends PureComponent {
  state = {
    active: "description"
  }
  render(){
    return (
      <>
          <div class="tab">

<div class="clearfix"></div>

<div class="tab_button">
    <button class="tablinks" onClick={() => this.setState({ active: "description"})} >Description</button>
    <button class="tablinks" onClick={() => this.setState({ active: "connect"})}>Connect</button>
    <button class="tablinks" onClick={() => this.setState({ active: "comments"})}>Comments</button>
</div>

{this.state.active === "description" && (
  <div id="" className="">
      <h1>Sollicitare Tu eripuit</h1>
      <h4>Earum conficiuntur maestitiam angere nullae soliditatem animos
          cum indicaverunt avocent stare etsi putant fecit morte iuste? </h4>
      <h1>Detraxisse usu inani</h1>
      <h4>Fingitur genus si nobis altera videtis conversa Ego fruuntur tenere
          Lucilius fugiat existimant probet intereant fore posse Accedit Chrysippo
          putarent tranquillat itaque excruciant inertissimae angusti Veserim Graecis.
          Laboribus scriptum infinitio divitiarum quid etiamsi dicitur carere Stoici umbram
          poetis finxerat terminari, In moderatius Tite causae usu arbitraretur inflammat
          perpetuis praeclaram copulatas quid enim cohaerescant restat posuit acutum mei.
      </h4>
      <img alt="campaign" class="tabimage" src="images/campaign_2.svg" />
      <img alt="campaign"  class="tabimage" src="images/campaign_2.svg" />
      <img alt="campaign" class="tabimage" src="images/campaign_2.svg" />
      <h1>Sollicitare Tu eripuit</h1>
      <h4>Earum conficiuntur maestitiam angere nullae soliditatem animos
          cum indicaverunt avocent stare etsi putant fecit morte iuste? </h4>
      <h1>Detraxisse usu inani</h1>
      <h4>Fingitur genus si nobis altera videtis conversa Ego fruuntur tenere
          Lucilius fugiat existimant probet intereant fore posse Accedit Chrysippo
          putarent tranquillat itaque excruciant inertissimae angusti Veserim Graecis.
          Laboribus scriptum infinitio divitiarum quid etiamsi dicitur carere Stoici umbram
          poetis finxerat terminari, In moderatius Tite causae usu arbitraretur inflammat
          perpetuis praeclaram copulatas quid enim cohaerescant restat posuit acutum mei.
      </h4>
  </div>
)}

{this.state.active === "connect" && (
<div id="" className="">
    <h3>News</h3>
    <p>Some news this fine day!</p>
</div>
)}

{this.state.active === "comments" && (
<div id="" className="">
    <h3>Contact</h3>
    <p>Get in touch, or swing by for a cup of coffee.</p>
</div>
)}

</div>
</>
    )
  }
}
export default CampaignTab;