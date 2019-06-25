import React from 'react';
import './Footer.css';

const footer = () => {
  return (
    <footer>
      <nav className="footer-site-navigation">
        <div>
          <p><b>My Accounts</b></p>
          <a href="https://investor.vanguard.com/my-account/log-on">Log on</a>
        </div>
        <div>
          <p><b>Investing</b></p>
          <a href="https://investor.vanguard.com/investing/investment-products">Investment products</a>
          <a href="https://investor.vanguard.com/investing/investment-accounts">Account types</a>
          <a href="https://investor.vanguard.com/investing/rollover-iras-transfers">Rollovers & transfers</a>
        </div>
        <div>
          <p><b>Advice & Retirement</b></p>
          <a href="https://investor.vanguard.com/financial-advisor/financial-advice">Partner with an advisor</a>
          <a href="https://investor.vanguard.com/investing/goals">Investing goals</a>
          <a href="https://investor.vanguard.com/retirement">Retirement planning</a>
          <a href="https://investor.vanguard.com/investing/investor-education">Investor education</a>
          <a href="https://investor.vanguard.com/investing/investment-calculator">Calculators & tools</a>
          <a href="https://investor.vanguard.com/taxes/">Tax-filing information</a>
          <a href="https://personal.vanguard.com/us/literature">Forms</a>
        </div>
        <div>
          <p><b>News & Perspectives</b></p>
          <a href="https://investornews.vanguard/">News & views</a>
          <a href="https://investornews.vanguard/your-investing-life">Your Investing Life</a>
          <a href="https://vanguardblog.com/">Vanguard Blog</a>
          <a href="https://investor.vanguard.com/investing/investment-research">Research</a>
          <a href="https://personal.vanguard.com/us/funds/tools/marketsummary#/">Market summary</a>
        </div>
        <div>
          <p><b>Benefits & Costs</b></p>
          <a href="https://investor.vanguard.com/what-we-offer/why-vanguard">Why we're different</a>
          <a href="https://investor.vanguard.com/investing/benefits/">Benefits</a>
          <a href="https://investor.vanguard.com/investing/investment-fees">Costs & fees</a>
          <a href="https://investor.vanguard.com/investing/account-conveniences">Account conveniences</a>
        </div>
      </nav>
      <div className="footer-bottom">
        <p>
          Vanguard funds not held in a brokerage account are held by The Vanguard Group, Inc., and are not protected by SIPC. Brokerage assets are held by Vanguard Brokerage Services, a division of Vanguard Marketing Corporation, member <a href="https://investor.vanguard.com/external-site-message?url=http://www.finra.org/Investors" className="underline">FINRA</a> and <a href="https://investor.vanguard.com/external-site-message?url=http://www.sipc.org/" className="underline">SIPC.</a>
        </p>
        <p className="subtext">
          © 1995–2019 The Vanguard Group, Inc. All rights reserved. Vanguard Marketing Corporation, Distributor of the Vanguard Funds. Your use of this site signifies that you accept our <a href="https://personal.vanguard.com/us/content/SiteWide/LglDocs/SWLglTermsConditionsContent.jsp" className="underline"> terms and conditions of use.</a>
        </p>
        <nav className="subtext underline footer-bottom-links">
          <a href="https://investor.vanguard.com/investing/privacy-policy">Privacy policy</a>
          <a href="https://investor.vanguard.com/security/">Security Center</a>
          <a href="https://investor.vanguard.com/customer-service/technical-support">Technical support</a>
          <a href="https://personal.vanguard.com/us/literature/prospectus/mutualfunds">Mutual fund prospectuses</a>
          <a href="https://personal.vanguard.com/us/litfulfillment/ELFProspectus?categoryCd=PRRP&subcategoryCd=ETPR&view=default">ETF (exchange-traded fund) prospectuses</a>
          <a href="https://personal.vanguard.com/us/litfulfillment/ELFProspectus?categoryCd=PRRP&subcategoryCd=VAPR&view=default">Variable annuity prospectuses</a>
          <a href="https://personal.vanguard.com/us/content/SiteWide/LglDocs/SWLglNonUSInvstContent.jsp">Special notice to non-U.S. investors</a>
          <a href="http://www.vanguardjobs.com/">Careers</a>
          <a href="https://investor.vanguard.com/investing/mobile-apps">Mobile app</a>
          <a href="https://investor.vanguard.com/what-we-offer/social-media">Social media</a>
          <a href="https://investor.vanguard.com/investing/privacy-policy#thirdPartyAnalytics">AdChoices</a>
        </nav>
      </div>
    </footer>
  )
}

export default footer;
