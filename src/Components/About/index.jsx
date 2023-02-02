import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Buildings, TerminalWindow, Question, FolderNotch, Users, ArrowDown } from 'phosphor-react'
import './style.css'
import circleText from '../../Images/Circle.png'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {

    const aboutHeroH1 = {
        initial: {
            y: 160,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.8,
                delay: 0.1
            }
        }
    }

    const aboutHeroH2 = {
        initial: {
            y: 140,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.8,
                delay: 0.6
            }
        }
    }

    const line = {
        initial: {
            scaleX: 0
        },
        animate: {
            scaleX: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
                delay: 0.4
            }
        }
    }

    const aboutControls1 = useAnimation();
    const [aboutRef1, aboutInView1] = useInView();

    useEffect(() => {
        if (aboutInView1) {
            aboutControls1.start("visible");
        }
    }, [aboutControls1, aboutInView1]);

    const aboutCard = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        transition: {
            duration: 0.6
        }
    };

    return (
        <>


            <div id='aboutPage'>
                <div className='container mx-auto relative top-0 flex flex-col justify-between items-center h-screen aboutHero '>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className='w-full'><Header /></motion.span>

                    <div className='flex flex-col relative w-[85%] sm:w-full top-[-2rem] sm:top-0 sm:flex-row items-start justify-center sm:items-end gap-x-2'>
                        <motion.div variants={aboutHeroH1} initial='initial' animate='animate' className='w-full sm:w-[46%] flex justify-between items-center'><h1 className='text-6xl sm:text-8xl font-light text-[#CCFF02] kayak-bold tracking-wide relative flex flex-col place-self-end w-max sm:w-full' >Get to <br /> <motion.div className='text-left sm:text-right text-[#f7f7f7]' variants={aboutHeroH1} initial='initial' animate='animate' transition={{ delay: 0.1 }}>know</motion.div></h1> <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.35 }}><img src={circleText} className='h-28 sm:hidden w-28 rotating' alt="" /></motion.div></motion.div>
                        <motion.div className='w-[60%] sm:w-full place-self-end sm:place-self-auto origin-left hidden sm:flex' variants={line} initial='initial' animate='animate'><div className='w-44 sm:w-full h-[1px] bg-[#CCFF02] relative'></div></motion.div>
                        <motion.div className='w-full sm:w-max flex justify-between items-center relative top-6 sm:top-0' variants={aboutHeroH2} initial='initial' animate='animate' ><motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className='flex justify-center items-center w-[6.3rem] h-[6.3rem] bg-[#CCFF02] rounded-full sm:w-0 sm:h-0 sm:bg-none' ><ArrowDown size={64} color="#1c1c1c" weight="thin" className='sm:hidden' /></motion.div> <h1 className='text-6xl sm:text-8xl font-light text-right sm:text-left text-[#f7f7f7] kayak-bold tracking-wide sm:top-48 relative'> us <br /> <motion.div className='text-[#CCFF02]' variants={aboutHeroH2} initial='initial' animate='animate' transition={{ delay: 0.7 }}>better</motion.div> </h1></motion.div>
                    </div>

                    <div className='relative flex justify-between items-center flex-col h-44 sm:h-80 bottom-10'>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} ><p className='text-center text-xl w-[72%] relative left-[50%] translate-x-[-50%] sm:text-2xl mt-4 text-[#f7f7f7b5]'>
                            We are here to satisfy our customers with our products <br /> and give them the best experience they have ever had.</p></motion.div>
                        <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }} ><ArrowDown size={64} color="#CCFF02" weight="thin" className='hidden sm:flex' /></motion.div>
                    </div>

                </div>

                <div className='w-screen pl-[20px] pr-[20px] sm:px-[160px] pt-[120px] flex flex-col justify-center items-center sm:pt-[210px] pb-[240px] bg-none relative'>
                    <div className='flex flex-col w-full select-none'>
                        <div className='aboutNavigation relative w-full sm:py-10 sm:px-8 py-8 px-4 justify-start items-center border-b border-[#f7f7f7af]'>
                            <h1 className='sm:text-9xl text-5xl flex items-start text-[#f7f7f7] kayak-light'><span className='sm:text-xl text-lg kayak-regular text-[#CCFF02] mr-4'>01</span> About</h1>
                        </div>

                        <div className='aboutNavigation relative w-full flex sm:justify-end items-center sm:py-10 sm:px-8 py-8 px-4 border-b border-[#f7f7f7af]'>
                            <h1 className='sm:text-9xl text-5xl flex items-start text-[#f7f7f7] kayak-light'><span className='sm:text-xl text-lg kayak-regular text-[#CCFF02] mr-4'>02</span> What We Do</h1>
                        </div>

                        <div className='aboutNavigation relative w-full flex justify-start items-center sm:py-10 sm:px-8 py-8 px-4 border-b border-[#f7f7f7af]'>
                            <h1 className='sm:text-9xl text-5xl flex items-start text-[#f7f7f7] kayak-light'><span className='sm:text-xl text-lg kayak-regular text-[#CCFF02] mr-4'>03</span> Technologies</h1>
                        </div>

                        <div className='aboutNavigation relative w-full flex sm:justify-end items-center sm:py-10 sm:px-8 py-8 px-4 border-b border-[#f7f7f7af]'>
                            <h1 className='sm:text-9xl text-5xl flex items-start text-[#f7f7f7] kayak-light'><span className='sm:text-xl text-lg kayak-regular text-[#CCFF02] mr-4'>04</span>Our Team</h1>
                        </div>
                    </div>
                </div>


                <div className='hidden w-screen pl-[20px] pr-[20px] sm:px-[160px] pt-[120px] sm:flex flex-col sm:pt-[210px] pb-[120px] sm:pb-[210px] bg-[#f7f7f7] relative'>
                    <h4 className='text-xl '><span className='text-[#1c1c1cd0] '>//</span>  ABOUT</h4>
                    <h1 className='text-9xl z-[0] text-center flex place-self-center thunderBlack w-max text-[#1c1c1c]'>WHO WE ARE</h1>
                    <div className='flex px-10 place-self-center relative h-[40rem] py-10 sm:w-[35%] w-[90%] bg-[#1c1c1c] '> 
                        <div className='flex justify-between items-start w-full h-max'>
                            <h1 className='text-6xl kayak-light text-[#f7f7f7]'>About</h1>
                            <span className='text-3xl kayak-light text-[#CCFF02]'>01</span>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>

        </>
    )
}

export default About




{/* <div className='container mx-auto p-2 h-max grid relative top-64 sm:top-[35rem]' ref={aboutRef1}>
<div className='gap-2 w-full h-full grid grid-cols-1 xl:grid-cols-3'>

    <motion.div variants={aboutCard} initial="hidden" animate={aboutControls1}><div className='p-10 sm:p-16 h-[25rem] sm:h-[30rem] rounded-[4rem] border-2 border-[#f7f7f7] flex flex-col'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl sm:text-3xl  kayak-light  text-[#f7f7f7]'>Who We Are</h1>
            <Buildings size={38} color='#CCFF02' weight="fill" />
        </div>
        <p className='text-lg sm:text-2xl font-regular text-justify mt-8 sm:mt-14 text-[#f7f7f7c7] underlineGreen'>Cloud Labs is a team of 2 people & we are focused on taking your business to the clouds!
            We are here to satisfy our customers with our products and give them the best experience they ever had.
        </p>
    </div></motion.div>

    <motion.div variants={aboutCard} initial="hidden" animate={aboutControls1} transition={{ delay: 0.2 }}><div className='p-10 sm:p-16 h-[25rem] sm:h-[30rem] rounded-[4rem] border-2 border-[#f7f7f7] flex flex-col'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl sm:text-3xl  kayak-light  text-[#f7f7f7] '>What We Do</h1>
            <TerminalWindow size={38} color='#CCFF02' weight="fill" />
        </div>

        <p className='text-lg sm:text-2xl font-regular text-justify mt-8 sm:mt-14 text-[#f7f7f7c7] underlineGreen relative'>We are digital creators,
            Our digital skills are mostly based around in: <br /> <br />
            1. Web Development <br />
            2. Social Media Marketing <br />
            3. Graphic Design <br />
        </p>
    </div></motion.div>

    <motion.div variants={aboutCard} ref={aboutRef1} initial="hidden" animate={aboutControls1} transition={{ delay: 0.3 }}><div className='p-10 sm:p-16 h-[25rem] sm:h-[30rem] rounded-[4rem] border-2 border-[#f7f7f7] flex flex-col'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl sm:text-3xl font-regular text-[#f7f7f7]  kayak-light '>Why us?</h1>

            <Question size={38} weight="fill" color='#CCFF02' />
        </div>

        <p className='text-lg sm:text-2xl text-justify mt-8 sm:mt-14 text-[#f7f7f7c7] underlineGreen relative'>Cloud Labs is not only a service that will offer you products. We are looking to get in touch with our customers in any way possible!
        </p>
    </div></motion.div>

</div>

<div className='gap-2 w-full h-full mt-2 grid grid-cols-1 xl:grid-cols-3 justify-center'>
    <div className='p-10 sm:p-16 h-[25rem] sm:h-[30rem] rounded-[4rem] bg-[#f7f7f7] col-span-2 flex flex-wrap justify-between items-start overflow-hidden'>

        <h1 className='leading-10 text-[2rem] sm:text-[3.8rem] sm:leading-[70px] font-bold tracking-wide text-[#1c1c1c] kayak-light '>WHAT TECHNOLOGIES <br /> DO WE USE?</h1>

        <div className='p-6 bg-[#1c1c1c] rounded-2xl xl:w-max'>
            <div className='flex-col items-center justify-center sm:w-full '>
                <div className='flex-col sm:flex justify-around  md:w-full gap-y-5 '>
                    <i className="devicon-react-original colored text-5xl"></i>
                    <i className="devicon-javascript-plain colored text-5xl ml-4 sm:ml-0"></i>
                    <i className="devicon-tailwindcss-plain colored text-5xl ml-4 sm:ml-0"></i>
                </div>

                <div className='flex-col sm:flex justify-around md:w-full mt-5 sm:mt-0 gap-y-5'>
                    <i className="devicon-html5-plain colored text-5xl mt-0 sm:mt-4"></i>
                    <i className="devicon-css3-plain colored text-5xl ml-4 sm:ml-0"></i>
                    <i className="devicon-firebase-plain colored text-5xl ml-4 sm:ml-0"></i>
                </div>
            </div>
        </div>
    </div>

    <div className='flex flex-col items-stretch justify-between w-full'>

        <motion.div transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.35
        }}
            initial={{ scale: 1 }}
            whileHover={{
                scale: 0.95
            }} whileTap={{
                y: 2.5
            }}><div className='work relative left-1 sm:left-0 p-4 h-[15rem] rounded-[3.5rem] bg-none border-2 border-[#f7f7f7] flex justify-center items-center cursor-pointer'>
                <h1 className='text-6xl text-[#f7f7f7] tracking-wider kayak-light'>WORK</h1>
                <FolderNotch size={68} className='ml-5' color="#CCFF02" weight="light" />
            </div></motion.div>

        <motion.div transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.35
        }}
            initial={{ scale: 1 }}
            whileHover={{
                scale: 0.95
            }} whileTap={{
                y: 2.5
            }}><div className='team relative left-1 sm:left-0 p-4 h-[15rem] rounded-[3.5rem] bg-[#CCFF02] flex justify-center items-center cursor-pointer'>

                <h1 className='text-6xl text-[#000000] tracking-wider kayak-light '>TEAM</h1>
                <Users size={68} color="#000000" className='ml-5' weight="light" />

            </div></motion.div>

    </div>
</div>
</div> */}