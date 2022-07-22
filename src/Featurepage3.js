import React from 'react'
import Digital3 from './images/digital-3.png'

export default function Featurepage3() {
    return (
        <div className='bg-gray-200'>
        <div className='container'>
            <div>
                <h4 className='text-center text-blue-900'>Why Clients Say Genpact Is the Best Digital Marketing Company</h4>
                <br/>
                <h5>If you just typed “digital marketing companies near me” in Google and picked the one closest to your business, you may have made a mistake (unless it’s us, of course). We’ve helped companies large and small all over the USA—and we can help yours, too.</h5><br></br>
                <h5>
                    At Global logic, we try and let our clients speak for us. Take a look at our internet marketing reviews from current and former clients to hear straight from them why we are the best internet marketing company for your needs.</h5><br></br>

            </div>
            <br/>
            <div className='columns-2'>
                <div>
                    <ul>
                        <h6><li style={{ listStyle: "square" }}>You’ll own all your deliverables, including your website. Some cheap digital marketing companies offer “free” websites with their services, or offer websites hosted on their “proprietary platform.” These are red flags that indicate you’re about to be handcuffed into an unfavorable contract.</li></h6><br></br>
                        <h6><li style={{ listStyle: "square" }}>You’ll optimize your marketing costs. Everything we do is tracked with advanced analytics so we can continually optimize your campaigns. This means you spend less and get more.</li></h6><br></br>
                        <h6><li style={{ listStyle: "square" }}>You get a dedicated account manager to be your guide, as well as a full support team that includes an SEO analyst, a web designer/developer, a PPC analyst, and a professional website copywriter.</li></h6><br></br>
                        <h6><li style={{ listStyle: "square" }}>You get the peace of mind that we have your back. Digital marketing is a long-term investment, which is why we believe in building partnerships, not acquiring clients. You can rest assured your dedicated account manager will be there for all of your needs and will over-deliver on results.</li></h6>
                    </ul>
                </div>
                <div>
                    <img className='digital' src={Digital3} />
                </div>
                </div>
                <br/><br/>
                <div>
                    <h4 className='text-center text-blue-900'>
                        ACHIEVE MEASURABLE RESULTS WITH TARGETED DIGITAL MARKETING SERVICES
                    </h4>
                    <br/>
                    <h6 className='text-center'>
                    How much will working with digital marketing help your business? It’s the question every prospective client wants to know, but it’s difficult to (intelligently) answer without some level of initial analysis. There are a lot of variables to consider, including:
                    </h6>
                    <br/>
                    <ul>
                        <li style={{listStyle:"disc"}}>Your industry</li>
                        <li style={{listStyle:"disc"}}>Your current website</li>
                        <li style={{listStyle:"disc"}}>The competitive landscape in your market</li>
                        <li style={{listStyle:"disc"}}>And more!</li>

                    </ul>
            </div>
        </div>
        </div>
    )
}