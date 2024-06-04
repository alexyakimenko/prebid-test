import 'https://cdn.jsdelivr.net/npm/prebid.js@latest/dist/not-for-prod/prebid.js'

const div_1_sizes = [
  [300, 250],
  [300, 600]
];

const adUnits = [
  {
      code: 'advert',
      mediaTypes: {
          banner: {
              sizes: div_1_sizes
          }
      },
      bids: [{
          bidder: 'adtelligent',
          params: {
              aid: 350975
          }
      }]
  }
];

window.pbjs = window.pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
  pbjs.addAdUnits(adUnits);
  pbjs.requestBids({
    bidsBackHandler: result => {
      const doc = document.querySelector('iframe').contentDocument;
      const bid = result[adUnits[0].code].bids[0]

      pbjs.renderAd(doc, bid.adId);
    },
    timeout: 2000
  });
});

  

