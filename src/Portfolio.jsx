import React from 'react';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import reactlogo from './reactlogo.svg';
import './Portfolio.css';

function Portfolio(props) {
  const stories = [
    {"title":"5 Killer Things We Learned About Home Buying From ’80s Action Movies","blurb":"What could Conan the Barbarian teach you about buying a home? More like what couldn’t he teach you? Written for realtor.com.","link":"https://www.realtor.com/advice/buy/home-buying-lessons-from-80s-movies/","img":"https://i.ytimg.com/vi/CXLVJw-38ak/hqdefault.jpg "},
    {"title":"America’s Bottomless Hunger","blurb":"America has a long history of providing for, and also failing, it’s neediest citizens. This article takes a look at the history of food stamps (now SNAP) and how you can help give with the most impact. ","link":"https://www.makechange.aspiration.com/articles/americas-bottomless-hunger","img":""},
    {"title":"Are You In On the Secret? How to Add a 'Secret Room' to Your Home\n","blurb":"Ever wanted to build a secret room or passageway to your house? Here's how. Written for realtor.com","link":"https://www.realtor.com/advice/home-improvement/are-you-in-on-the-secret-how-to-add-a-hidden-room-to-your-home/","img":"https://i.ytimg.com/vi/WFGc8nvNw-8/maxresdefault.jpg"},
    {"title":"Chokeslam! WWE's Kane Tells Us Why He’s Selling His Tennessee Estate","blurb":"What kind of house would a 300 lb demon from hell build? A charming three-bedroom contemporary in the hills of Tennessee. Written for realtor.com","link":"https://www.realtor.com/news/celebrity-real-estate/wwe-kane-tells-us-why-he-is-selling-tennessee-home/","img":"https://cdn.vox-cdn.com/thumbor/57oK2sP-jSSRn50DB0eblf9d5kU=/0x0:926x528/920x613/filters:focal(389x190:537x338):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/52982945/Kane.0.jpg"},
    {"title":"How America is Killing Affordable Housing\n","blurb":"Finding affordable housing in this country is nearly impossible for those who need it most. Here's how it happened, and why a solution is nowhere it sight. Written for Make Change.","link":"https://www.makechange.aspiration.com/articles/trumps-budget-proposal-the-fatal-blow-to-our-nations-affordable-housing-programs","img":"https://www.flickr.com/photos/culturesubculture/325861311/in/album-72157594426015905/"},
    {"title":"How Do Bonds Actually Work?","blurb":"While bonds are a popular way to balance an investment portfolio’s overall risk, they don’t get the same attention from investors as their more exciting cousins, stocks. But that doesn't mean bonds are boring.","link":"https://www.makechange.aspiration.com/articles/how-do-bonds-actually-work-anyway","img":"https://modernmoney.files.wordpress.com/2010/06/south_carolina_consoliation_bond.jpg"},
    {"title":"Keep the Bad Guys Out! How to Build a Safe Room That’s Utterly Impenetrable","blurb":"Security fog, EMP-proof doors and facial recognition software are just a few of the things the ultra rich have to keep the bad guys away.  Written for realtor.com.","link":"https://www.realtor.com/advice/home-improvement/how-to-build-a-safe-room/?is_wp_site=1","img":"https://static1.squarespace.com/static/542227c8e4b01cc5399bd3df/t/544b13b4e4b04e8632c33fab/1414206405355/"},
    {"title":"Life After the Olympics","blurb":"The majority of Olympians don’t life off a Wheaties sponsorship, so what do they do when the games are gone?","link":"https://www.makechange.aspiration.com/articles/life-after-the-olympics","img":""},
    {"title":"The Father and Son Who Ate Every Animal Possible","blurb":"In the mid 1800s, an eccentric paleontologist thought it would be a good idea to eat everything from mice on toast to bloatflies. His son followed in his footsteps with a fork and knife. These two men ate their way through the animal kingdom. Written for Atlas Obscura. ","link":"http://www.atlasobscura.com/articles/the-father-and-son-who-ate-every-animal-possible","img":"https://i.pinimg.com/736x/5d/96/e2/5d96e2a6eff9ae2e03d678482b6435f7--brandy-fleas.jpg"},
    {"title":"The Government Has Its Own System for Tracking Your Credit, and You’ve Probably Never Heard of It","blurb":"It's called CAIVRS, and no, you can't see what's on it. From for my ","link":"https://www.makechange.aspiration.com/articles/government-has-its-own-system-for-tracking-your-credit-caivrs","img":"https://sofrep.com/wp-content/uploads/2017/08/Illuminati-YT-905x509.jpg"},
    {"title":"The Secret, Not-So-Glamorous, Life of a Pro Wrestler\n","blurb":"Dreamed of being a pro wrestler as a kid? From chipping in for gas money to broken bones, getting there isn't as easy as you might think. Written for Make Change","link":"https://www.makechange.aspiration.com/articles/the-secret-not-so-glamorous-life-of-a-pro-wrestler","img":"https://i.ytimg.com/vi/Sfkba30OSjQ/maxresdefault.jpg"},
    {"title":"The Surprising Things that Drop Credit Scores","blurb":"Everyone’s credit history is unique, but there are some moves that can trip anyone up. Check out some of these unusual things that can ding your score, as well a few that actually won’t subtract from your FICO number.","link":"https://www.makechange.aspiration.com/articles/the-surprising-things-that-drop-credit-scores","img":""},
    {"title":"What Does it Take to Detox a Company?","blurb":"Some CEOs are so terrible, they poison the whole business. Can these companies turn themselves around?","link":"https://www.makechange.aspiration.com/articles/what-does-it-take-to-detox-a-company","img":""},
    {"title":"What is Socially Responsible Investing?","blurb":"So you want to make money off your money, but do it by not hurting people, or the environment. You want to invest responsibly—and here’s what that means. ","link":"https://www.makechange.aspiration.com/articles/what-is-socially-responsible-investing ","img":""},
    {"title":"What's the CFPB Ever Done for Housing? Quite a Lot","blurb":"With the Trump administration threatening to tear the whole damn thing down, you've got to wonder, is the CFPB really doing more harm to the housing market than good? Written for The Street","link":"https://www.thestreet.com/story/14012754/1/what-s-the-cfpb-ever-done-for-housing-quite-a-lot.html","img":"http://www.ahcopa.org/wp-content/uploads/sites/263/2016/12/cfpb.jpg"},
    {"title":"What’s the Real meaning Behind All These Bank Fees?","blurb":"$5 fee ATM fee. $10 maintenance fee (savings too low). $5 fee for not spending enough. $25 fee for stopping a payment. Fees for breathing. Fees for walking. You get the idea—but is there any good reason they exist?","link":"https://www.makechange.aspiration.com/articles/whats-the-real-meaning-behind-all-those-bank-fees","img":""},
    {"title":"Why The Farm Bill Matters ","blurb":"Ever wondered what the farm bill is, and why it’s so important? ","link":"https://www.makechange.aspiration.com/articles/why-the-farm-bill-matters","img":""}
  ];

  return (
    <div id="Portfolio">
      {stories.map(story => <SimpleExpansionPanel story={story} />)}
    </div>
  );
}

export default Portfolio;
