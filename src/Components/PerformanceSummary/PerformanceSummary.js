import React from 'react';

const performanceSummary = () => {
  return (
    <section>
      <p>|Date Range|</p>
      <div>
        <p>Beginning balance |money|</p>
        <p>Purchases & withdrawals |+/-|</p>
        <p>Investment returns |+/-</p>
      </div>
      <div>
        <p>Ending balance</p>
      </div>
      <div>
        <p>Rate of return</p>
      </div>
      <div>
        <p>SVG graph</p>
      </div>
      <p><a href="">Disclosure </a>|<a href=""> See how we calculate performance</a></p>
      <p>Vanguard funds not held in a brokerage account are held by The Vanguard Group, Inc. and are not protected by SIPC. Brokerage assets are held by Vanguard Brokerage Services, a division of Vanguard Marketing Corperation, member FINRA and SIPC. <a href="">Account protection</a></p>
    </section>
  )
}

export default performanceSummary;
