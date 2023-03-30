import React, { useRef, useLayoutEffect, useState, useEffect, forwardRef } from 'react';
import swiper, { Autoplay } from 'swiper';
import 'swiper/css';
import './index.less';

swiper.use([ Autoplay ]);

type HomePropsType = {};
type ChildPropsType = {
    animation: boolean
};
const openUrl = (url:any):void => {
    if(url)
        window.open(url, '_blank');
}

// 头部导航
interface menuText {
    [key: string]: any,
        text: string,
        url: string,
        subText: string,
        ac: boolean
}
const menuLst: menuText[] = [
    {
        text: 'Marketplace',
        subText: 'COMING SOON',
        ac: false,
        url: '',
    },
    {
        text: 'WonderBird',
        subText: 'COMING SOON',
        ac: false,
        url: '',
    },
    {
        text: 'Docs',
        subText: '',
        ac: false,
        url: 'https://docs.rentfun.io/',
    },
    {
        text: 'Blog',
        subText: '',
        ac: false,
        url: 'https://mirror.xyz/rentfun.eth',
    },
    {
        text: 'Join Discord',
        subText: '',
        ac: true,
        url: 'http://discord.gg/rentfun',
    }
];
const THead:React.FC<HomePropsType> = () => {
    const className = (menu: any):string => {
        let className = 't-menu';
        if(menu.ac)
            className += ' ac';
        if(menu.url)
            className += ' cursor';
        return className;
    }
    return(
        <div className="t-head">
            <img className="t-logo" src={require('./images/s1/logo.png')} alt=""/>
            {
                menuLst.map((menu: menuText, idx: number) => {
                    return <span onClick={openUrl.bind(this, menu.url)} className={className(menu)} key={`thead${idx}`}>
                        {menu.text}
                        <span className={['subText', menu.subText ? 'show' : ''].join(' ')}>{menu.subText}</span>
                    </span>
                })
            }
        </div>
    )
}

interface t3Block {
    [key: string]: any,
    title: string,
    description: string,
    icon: string,
}
const t3Data: t3Block[] = [
    {
        icon: require('./images/s3/1.png'),
        title: 'No Collaterals',
        description: 'No collaterals  required for renters.',
    },
    {
        icon: require('./images/s3/2.png'),
        title: 'Original NFTs',
        description: 'No wrapped NFTs issued to make sure the renters have the 100% same experiences as the NFT owners.',
    },
    {
        icon: require('./images/s3/3.png'),
        title: 'Rentable Address',
        description: 'Could rent an address containing multiple NFTs to fully experience games that require multiple NFTs to play.',
    }
];

interface t4Block {
    [key: string]: any,
    title: string,
    description: string,
    icon: string,
}
const t4Data: t4Block[] = [
    {
        icon: require('./images/s4/1.png'),
        title: 'Your Keys, Your NFTs',
        description: 'NFT owners maintain the exclusive ownership of the vault contract address that hold your NFTs.',
    },
    {
        icon: require('./images/s4/2.png'),
        title: 'Efficient Lending',
        description: 'Higher capital efficiency for NFT owners by enabling to list multiple NFTs with a single click and attracting ample renters through targeted campaigns.',
    },
    {
        icon: require('./images/s4/3.png'),
        title: 'Renters Whitelist',
        description: 'In addition to the public model, NFT owners can also opt for the private model to lend  NFTs to the whitelist addresses.',
    }
];

interface t5Block {
    icon: string,
    url: string
}
const t5Data: t5Block[] = [
    {
        icon: require('./images/s5/1.png'),
        url: 'https://twitter.com/Larvandweb3',
    },
    {
        icon: require('./images/s5/2.png'),
        url: 'https://twitter.com/immortalelixr',
    },
    {
        icon: require('./images/s5/3.png'),
        url: 'https://twitter.com/Blanklee3',
    },
    {
        icon: require('./images/s5/4.png'),
        url: 'https://twitter.com/berlinrobbery',
    },
    {
        icon: require('./images/s5/5.png'),
        url: 'https://twitter.com/memerberries',
    },
    {
        icon: require('./images/s5/6.png'),
        url: 'https://twitter.com/TheShred_',
    },
    {
        icon: require('./images/s5/7.png'),
        url: 'https://twitter.com/JackLucas045',
    },
    {
        icon: require('./images/s5/8.png'),
        url: 'https://twitter.com/0x_Astro',
    },
    {
        icon: require('./images/s5/9.png'),
        url: 'https://twitter.com/Kevin176732291',
    },
    {
        icon: require('./images/s5/10.png'),
        url: 'https://twitter.com/_martialfarts',
    },

];

const TSection2 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    return(
        <div ref={ref} className={`t-section s2 flex ${animation ? 'anOpacity' : ''}`} >
            <div className="t-flex bg">
                <div className="t-bird"><img src={require("./images/s2/bird.svg").default} alt=""/></div>
                <div className="t-2-title">Learn Access Delegation</div>
                <div className="t-2-title-sub">
                    RentFun proposes a brand new Access <br/>
                    Delegation Protocol to ensure that the NFT <br/>
                    owners only need to delegate the access <br/>
                    rights of the NFTs to the renters.
                </div>
                <div className="t-operation center">
                    <span onClick={openUrl.bind(this,'http://poc.rentfun.io/')} className="t-button bg">
                        POC Demo
                        <img src={require("./images/s2/arrow.png")} alt=""/>
                    </span>
                    <span onClick={openUrl.bind(this,'https://docs.rentfun.io/')} className="t-button">Docs</span>
                </div>
            </div>
            <div className="t-flex r">
                <div className="t-2-r-title">
                    Make NFT rentals <br/>
                    easy and secure <br/>
                    through Access <br/>
                    Delegation
                </div>
                <div className="t-2-r-title-second">SDK: Front-end  Plug & Play</div>
                <div className="t-2-r-title-third">
                    RentFun offers an SDK for NFT issuers to <br/>
                    seamlessly integrate into their front-end <br/>
                    codes within 2~3 hours.
                </div>
                <div className="t-operation">
                    <span onClick={openUrl.bind(this,'https://docs.rentfun.io/integrations/rentfun-javascript-sdk')} className="t-button">
                        Integration
                         <img src={require("./images/s2/arrow.png")} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    )
}));

const TSection3 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    return(
        <div ref={ref} className={`t-section s3 ${animation ? 'anOpacity' : ''}`}>
            <div className="t-3-title">Same Fun, Low Cost</div>
            <div className="flex">
                <div className="t-flex">
                    {
                        t3Data.map((item: t3Block, idx: number) => {
                            return <div className={`t-3-list ${ + idx === 0 ? 'm' : ''}`} key={'t3' + idx}>
                                <img className={`${idx === 1 ? 'i2' : ''} ${idx === 2 ? 'i3' : ''}`} src={item.icon} alt=""/>
                                <div className="t-l-title">{item.title}</div>
                                <div className="t-l-description">{item.description}</div>
                            </div>
                        })
                    }
                </div>
                <div className="t-flex r p overflow">
                    <img className={`t-bird ${animation ? 'an' : ''}`} src={require("./images/s3/bird.svg").default} alt=""/>
                    <span className={`t-3-icon-1 ${animation ? 'an' : ''}`}></span>
                    <span className={`t-3-icon-2 ${animation ? 'an' : ''}`}></span>
                </div>
            </div>
        </div>
    )
}));

const TSection4 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    return(
        <div ref={ref} className={`t-section s4 flex ${animation ? 'anOpacity' : ''}`}>
            <div className="t-flex">
                <img className="t-bird" src={require("./images/s4/bird.svg").default} alt=""/>
            </div>
            <div className="t-flex r">
                <div className="t-3-title">Passive Earnings, 100% Ownership</div>
                {
                    t4Data.map((item: t3Block, idx: number) => {
                        return <div className={`t-3-list ${ + idx === 0 ? 'm' : ''}`} key={'t3' + idx}>
                            <img className={`${idx === 0 ? 'i4' : ''} ${idx === 1 ? 'i5' : ''} ${idx === 2 ? 'i6' : ''}`} src={item.icon} alt=""/>
                            <div className="t-l-title">{item.title}</div>
                            <div className="t-l-description">{item.description}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}));

const TSectionSwiper = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    return(
        <div ref={ref}  className={`t-swiper ${animation ? 'anOpacity' : ''}`}>
            <div className="t-swiper-section">Our Ever Growing Community: </div>
            <div className="t-swiper-section l swiper-container overflow">
                <div className="swiper-wrapper">
                    <div className={`t-slider swiper-slide`}>Co-contribute</div>
                    <div className={`t-slider swiper-slide`}>Co-govern</div>
                    <div className={`t-slider swiper-slide`}>Co-share</div>
                </div>
            </div>
        </div>
    )
}));

const TSection6 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    return(
        <div ref={ref} className={`t-section s6 ${animation ? 'anOpacity' : ''}`} >
            <div  onClick={openUrl.bind(this, 'https://docs.rentfun.io/early-bird-program')} className="t-block">
                <span className="t-6-title">Early Birds Get The Worm ($RENT)</span>
                <img className="t-img" src={require("./images/s6/1.png")} alt=""/>
                <span className="t-6-title-sub">Learn More</span>
                <span className="t-arrow"><img src={require("./images/s2/arrow.png")} alt=""/></span>
            </div>
        </div>
    )
}));

interface t7Block {
    icon: string,
    url: string
}
const t7Data: t7Block[] = [
    {
        icon: require('./images/s7/1.png'),
        url: 'http://discord.gg/rentfun'
    },
    {
        icon: require('./images/s7/2.png'),
        url: 'https://mirror.xyz/rentfun.eth'
    },
    {
        icon: require('./images/s7/3.png'),
        url: 'https://twitter.com/rentfun_io'
    },
    {
        icon: require('./images/s7/4.png'),
        url: 'https://github.com/RentFun'
    },
    {
        icon: require('./images/s7/5.png'),
        url: 'https://forum.rentfun.io/'
    }
];

const className7 = (idx: number):string => {
    let className = 't-7-img';
    if(idx === 0)
        className += ' i0'
    else if(idx === 1)
        className += ' i1'
    else if(idx === 2)
        className += ' i2'
    else if(idx === 3)
        className += ' i3'
    else if(idx === 4)
        className += ' i4'
    return className;
}

const TSection7: React.FC<ChildPropsType> = (props) => {
    const { animation } = props;
    return(
        <div className={`t-section s7 ${animation ? 'anOpacity' : ''}`} >
            <img className="t-point" src={require("./images/s1/point.svg").default} alt=""/>
            <div className="t-7-title">Join us</div>
            <div className="t-7-icon">
                {
                    t7Data.map((item: t7Block, idx: number) => {
                        return <img  onClick={openUrl.bind(this,item.url)}  className={className7(idx)} key={`class7${idx}`} src={item.icon} alt=""/>
                    })
                }
            </div>
            <div className="t-footer flex">
                <div className="t-text">© 2023 RentFun, All Rights Reserved.</div>
                <div className="t-f-icon flex">
                    <img src={require("./images/s7/logo.png")} alt=""/>
                </div>
                <div className="t-text r">
                    <img src={require("./images/s7/email.png")} alt=""/>
                    Blank@rentfun.io
                </div>
            </div>
        </div>
    )
}

const Home:React.FC<HomePropsType> = (props, context) => {
    const [ clientHeight, setHeight ] = useState<number>(0);
    const [ top, setTop ] = useState<number>(0);
    const [ svgHeight, setSvgHeight ] = useState<number>(0);
    const [ animation2, setAnimation2 ] = useState<boolean>(false);
    const [ animation3, setAnimation3 ] = useState<boolean>(false);
    const [ animation4, setAnimation4 ] = useState<boolean>(false);
    const [ animationSwiperRef, setAnimationSwiperRef ] = useState<boolean>(false);
    const [ animation5, setAnimation5 ] = useState<boolean>(false);
    const [ animation6, setAnimation6 ] = useState<boolean>(false);
    const [ animation7, setAnimation7 ] = useState<boolean>(false);
    const scale: number = (1920 / 1200);
    const windowClientHeight: number = window.document.body.clientHeight;
    const scrollNumber:number = windowClientHeight - clientHeight - top - (342 / scale);
    const svgRef:any = useRef();
    const imgRef:any = useRef();
    const s2Ref:any = useRef();
    const s3Ref:any = useRef();
    const s4Ref:any = useRef();
    const swiperRef:any = useRef();
    const s5Ref:any = useRef();
    const s6Ref:any = useRef();

    useLayoutEffect(() => {
        setSvgHeight(svgRef.current.clientHeight)
        setHeight(imgRef.current.clientHeight)
        setTop(imgRef.current.y)
        if(scrollNumber > 0) {
            setAnimation2(true);
        } else {
            setAnimation2(false);
        }
    }, [imgRef, svgRef]);

    useEffect(() => {
        new swiper ('.swiper-container', {
            direction: 'vertical', // 垂直切换选项
            speed: 2000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            loop: true,
        });
        return () => {}
    }, []);


    const scroll:any = (event: any) => {
        if((scrollNumber + event.target.scrollTop) > 0){
            setAnimation2(true);
        } else {
            setAnimation2(false);
        }
        if((scrollNumber + event.target.scrollTop) > s2Ref.current.clientHeight){
            setAnimation3(true);
        } else {
            setAnimation3(false);
        }
        if((scrollNumber + event.target.scrollTop) > (s2Ref.current.clientHeight + s3Ref.current.clientHeight)){
            setAnimation4(true);
        } else {
            setAnimation4(false);
        }
        if((scrollNumber + event.target.scrollTop) > (s2Ref.current.clientHeight + s3Ref.current.clientHeight + s4Ref.current.clientHeight)){
            setAnimationSwiperRef(true);
        } else {
            setAnimationSwiperRef(false);
        }
        if((scrollNumber + event.target.scrollTop) > (s2Ref.current.clientHeight + s3Ref.current.clientHeight + s4Ref.current.clientHeight + swiperRef.current.clientHeight)){
            setAnimation5(true);
        } else {
            setAnimation5(false);
        }
        if((scrollNumber + event.target.scrollTop) > (s2Ref.current.clientHeight + s3Ref.current.clientHeight + s4Ref.current.clientHeight + swiperRef.current.clientHeight + s5Ref.current.clientHeight)){
            setAnimation6(true);
        } else {
            setAnimation6(false);
        }
        if((scrollNumber + event.target.scrollTop) > (s2Ref.current.clientHeight + s3Ref.current.clientHeight + s4Ref.current.clientHeight + swiperRef.current.clientHeight + s5Ref.current.clientHeight + s6Ref.current.clientHeight)){
            setAnimation7(true);
        } else {
            setAnimation7(false);
        }
    }

    return (
        <div onScrollCapture={scroll} className="t-home-section">
            <div style={{ height: `${clientHeight + top + (342 / scale)}px` }} className="t-section s1">
                <THead />
                <img className="t-point" src={require("./images/s1/point.svg").default} alt=""/>
                <div style={{ height: `${clientHeight}px` }} className="t-box">
                    <img ref={imgRef} className="t-point" src={require("./images/s1/sun.svg").default} alt=""/>
                    <img className="t-logo-center" src={require("./images/s1/logo2.png")} alt=""/>
                    <div className="t-title">Liquidity for NFT Utility</div>
                    <div className="t-title-sub">Rent Original NFTs Through Access Delegation on Arbitrum</div>
                    <div className="t-icon">
                        <img onClick={openUrl.bind(this, 'https://twitter.com/rentfun_io')} src={require("./images/s1/3.png")} alt=""/>
                        <img onClick={openUrl.bind(this, 'https://github.com/RentFun')}  src={require("./images/s1/2.png")} alt=""/>
                        <img onClick={openUrl.bind(this, 'http://discord.gg/rentfun')}  src={require("./images/s1/1.png")} alt=""/>
                    </div>
                </div>
            </div>
            <TSection2 ref={s2Ref} animation={animation2}/>
            <TSection3 ref={s3Ref} animation={animation3}/>
            <TSection4 ref={s4Ref} animation={animation4}/>
            <TSectionSwiper ref={swiperRef} animation={animationSwiperRef}/>
            <div  ref={s5Ref}  className={`t-section s5 ${animation5 ? 'anOpacity' : ''}`} >
                <img ref={svgRef} className="t-line" src={require("./images/s5/line.svg").default} alt=""/>
                <div style={{ height: `${svgHeight}px` }} className="t-box">
                    <div  className="t-pos">
                        {
                            t5Data.map((item: t5Block, idx: number) => {
                                return  <img  onClick={openUrl.bind(this,item.url)} className={`t-icon-${idx + 1}`} key={`t-icon-${idx}`} src={item.icon} alt=""/>
                            })
                        }
                    </div>
                </div>
            </div>
            <TSection6 ref={s6Ref} animation={animation6}/>
            <TSection7 animation={animation7}/>
        </div>
    );
}


export default Home;
