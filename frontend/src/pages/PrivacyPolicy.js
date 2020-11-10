import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
       <section className="faq">
        <div className="container">
          <div className="faq-flex">
            {/* <h4>www.kuyam.store</h4> */}
            <h4>Choose Earthenware for Healthy Cooking...!</h4>
            <h4>www.kuyam.store</h4>
            <p>
          
              {/* <Link className="text-white-50" to="/">
              <i class="fas fa-home" style={{color:'#fff',fontSize:'20px'}}></i>
              </Link>{' '} */}
              <Link className="text-white-50" to=""> 
              <i class="fas fa-envelope" style={{color:'#fff',fontSize:'20px',fontStyle:'italic'}}>   info@kuyam.store</i>
              </Link>{' '}
            
            </p>
          </div>
        </div>
      </section> 

      <section>
        <div className="container mt-4 mb-5" style={{textAlign:'justify'}}>
          {/* <h1>Who we are</h1> */}
          
        <h1 className="head" style={{textAlign:'center',fontFamily: 'Playball',paddingBottom:'45px',paddingTop:'35px',color:'#c15538',fontWeight:'bold'}}>Privacy Policy</h1>
        <div className="filed" style={{fontFamily:'Poppins'}}>
<h3>Your privacy is important to us</h3>

          
          <p>
          <p>It is WWW.KUYAM.STORE's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="HTTP://WWW.KUYAM.STORE"> HTTP://WWW.KUYAM.STORE</a> (hereinafter, "us", "we", or "HTTP://WWW.KUYAM.STORE"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
<p>This Privacy Policy, together with the Terms of service posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms of service.</p>
          </p><br/>
          <h2>Website Visitors</h2>
<p>Like most website operators, WWW.KUYAM.STORE collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request.WWW.KUYAM.STORE's purpose in collecting non-personally identifying information is to better understand how WWW.KUYAM.STORE's visitors use its website. From time to time, WWW.KUYAM.STORE may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>
<p>WWW.KUYAM.STORE also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on HTTP://WWW.KUYAM.STORE blog posts. WWW.KUYAM.STORE only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
<br/>
<h2>Gathering of Personally-Identifying Information</h2>
<p>Certain visitors to WWW.KUYAM.STORE's websites choose to interact with WWW.KUYAM.STORE in ways that require WWW.KUYAM.STORE to gather personally-identifying information. The amount and type of information that WWW.KUYAM.STORE gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at HTTP://WWW.KUYAM.STORE to provide a username and email address.</p>
<br/>
<h2>Security</h2>
<p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
<br/>
<h2>Advertisements</h2>
<p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by WWW.KUYAM.STORE and does not cover the use of cookies by any advertisers.</p> 
<br/>
<h2>Links To External Sites</h2>
<p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of service of every site you visit.</p>
<p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
<br/>
<h2>Protection of Certain Personally-Identifying Information</h2>
<p>WWW.KUYAM.STORE discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on WWW.KUYAM.STORE's behalf or to provide services available at WWW.KUYAM.STORE's website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using WWW.KUYAM.STORE's website, you consent to the transfer of such information to them. WWW.KUYAM.STORE will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, WWW.KUYAM.STORE discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when WWW.KUYAM.STORE believes in good faith that disclosure is reasonably necessary to protect the property or rights of WWW.KUYAM.STORE, third parties or the public at large.</p>
<p>If you are a registered user of HTTP://WWW.KUYAM.STORE and have supplied your email address, WWW.KUYAM.STORE may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with WWW.KUYAM.STORE and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. WWW.KUYAM.STORE takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>
<br/><br/>
<p>WWW.KUYAM.STORE is located at:</p>
<p>KODIKAMAM jaffna</p>
<p>40000 - JAFFNA ,</p> <p>Sri Lanka</p>
770483779

        </div>
        <br/>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
