import React from 'react'
import style from './Homepages.module.css';
import Product from '../components/Product';
import image from '../assets/image.png'
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'


const Homepages = () => {
    return (
        <>
            <main>
                <div className={style.kl}>

                    <div className={style.mainbg}>
                        <div className={style.q1}>
                            <div className={style.q2}>
                                <div className={style.q3}>
                                    <div className={style.j1}>
                                        <h2>Nullam maximus semper est</h2>
                                    </div>
                                    <div className={style.j2}>
                                        <h2>PERFECT FOR THE OUTDOORS</h2>
                                    </div>
                                    <div className={style.j3}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className={style.j4}>
                                        <div className={style.j4in}>
                                            <a href="#"><strong>DISCOVER NOW</strong></a>
                                        </div>
                                    </div>
                                </div>

                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={style.other}>
                    <div className={style.other1}>
                        <div className={style.o1}>
                            <div className={style.o2}>
                                <div className={style.p1}>
                                    <div className={style.p2}>
                                        <div className={style.pf}>
                                            <div className={style.icon}>
                                                <i className={`${style.iconi} fas fa-plane`}></i>
                                            </div>
                                            <div className={style.iconp}>
                                                <h6>TRAVEL</h6>
                                                <div className={style.po}>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.p2}>
                                        <div className={style.pf}>
                                            <div className={style.icon}>
                                                <i className={`${style.iconi} fas fa-folder`}></i>
                                            </div>
                                            <div className={style.iconp}>
                                                <h6>TRAVEL</h6>
                                                <div className={style.po}>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.p1}>
                                    <div className={style.p2}>
                                        <div className={style.pf}>
                                            <div className={style.icon}>
                                                <i className={`${style.iconi} fas fa-book`}></i>
                                            </div>
                                            <div className={style.iconp}>
                                                <h6>STUDY</h6>
                                                <div className={style.po}>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.p2}>
                                        <div className={style.pf}>
                                            <div className={style.icon}>
                                                <i className={`${style.iconi} fas fa-hiking`}></i>
                                            </div>
                                            <div className={style.iconp}>
                                                <h6>HIKING</h6>
                                                <div className={style.po}>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.p1}>
                                    <div className={style.p2}>
                                        <div className={style.pf}>
                                            <div className={style.icon}>
                                                <i className={`${style.iconi} fas fa-compass`}></i>
                                            </div>
                                            <div className={style.iconp}>
                                                <h6>VACATION</h6>
                                                <div className={style.po}>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.p2}>
                                        <div className={style.pf}>
                                            <div className={style.icon}>
                                                <i className={`${style.iconi} fas fa-heart`}></i>
                                            </div>
                                            <div className={style.iconp}>
                                                <h6>FITNESS</h6>
                                                <div className={style.po}>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.product}>
                    <div className={style.productinner}>
                        <div className={style.product1}>

                            <div className={style.product1inner}>

                                <div className={style.productmess}>
                                    <p>TELLUS LUCTUS NEC ULLAMCORPER MATTIS PULVINAR DAPIBUS LEO</p>
                                </div>

                                <div className={style.producttitle}>
                                    <h2 className={style.title}>BACKPACKS FOR EVERYTHING</h2>
                                </div>
                                <div className={style.space}></div>
                                <Product />
                            </div>

                        </div>
                    </div>
                </div>

                {/* after images */}

                <div className={style.product}>
                    <div className={style.a1}>
                        <div className={style.a2}>
                            <div className={style.ai}>
                                <div className={style.lk1}>

                                    <div className={style.k1}>
                                        <p>ABOUT OUR COMPANY</p>
                                    </div>

                                    <div className={style.k2}>
                                        <h2>BEST BRAND BEST QUALITY</h2>
                                    </div>

                                    <div className={style.k1}>
                                        <p>Sed maximus ante vel ipsum euismod maximus. Sed efficitur semper lacus, sit amet facilisis nulla gravida sit amet. Vivamus eleifend, elit eget scelerisque pulvinar, augue dui rutrum tellus, porta scelerisque purus mi a enim. Nulla eget nunc convallis, blandit leo ut, iaculis orci. Ut condimentum molestie ex nec lacinia.</p>
                                    </div>

                                    <div className={style.k1}>
                                        <p>Morbi aliquet interdum nisi, id pulvinar enim elementum quis. Praesent tincidunt nisi ac purus hendrerit, non molestie eros malesuada. Pellentesque porta neque eu metus efficitur, ut commodo diam tempus.</p>
                                    </div>

                                    <div className={style.k3}>
                                        <div className={style.k3in}>
                                            <a className={style.k3b} href="#"><strong>MORE ABOUT US</strong></a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={style.ai2}>
                                <img src={image} alt="image" />

                            </div>
                        </div>
                    </div>
                </div>

                {/* image after */}

                <div className={style.ma}>
                    <div className={style.mai}>
                        <div className={style.mai2}>

                            <div className={style.mi1}>

                                <div className={style.ji1}>
                                    <h2>68</h2>
                                </div>

                                <div className={style.ji2}>
                                    <h2>BEST BRANDS</h2>
                                </div>

                            </div>

                            <div className={style.mi1}>

                                <div className={style.ji1}>
                                    <h2>99+</h2>
                                </div>

                                <div className={style.ji2}>
                                    <h2>QUALITY PRODUCTS</h2>
                                </div>

                            </div>

                            <div className={style.mi1}>

                                <div className={style.ji1}>
                                    <h2>16</h2>
                                </div>

                                <div className={style.ji2}>
                                    <h2>TOP CATEGORIES</h2>
                                </div>

                            </div>

                            <div className={style.mi1}>

                                <div className={style.ji1}>
                                    <h2>5K</h2>
                                </div>

                                <div className={style.ji2}>
                                    <h2>HAPPY CUSTOMERS</h2>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* last secound part */}

                <div className={style.box}>

                    <div className={style.boxin}>

                        <div className={style.boxmain}>

                            <div className={style.boxspace}></div>

                            <div className={style.boxpart}>

                                {/* box1 */}

                                <div className={style.box1}>

                                    <div className={style.b1}>

                                        <div className={style.box1inner1}>

                                            <div className={style.innerbox1}>

                                                <div className={style.info1}>

                                                    <div className={style.info1inner}>
                                                        <i className={'fa-solid fa-quote-left'}></i>
                                                    </div>
                                                </div>
                                                <div className={style.info2}>
                                                    <div className={style.info2inner2}>
                                                        Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula.
                                                    </div>
                                                </div>

                                                <div className={style.info3}>
                                                    <div className={style.info3inner3}>
                                                        <div className={style.info3image}>
                                                            <a href="#">
                                                                <img height={60} width={60} src="" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className={style.info3detailes}>
                                                            <a className={style.info3a1} href="#">Sofia Miller</a>
                                                            <a className={style.info3a2} href="#">5 stars</a>
                                                            <ul className={style.info3ul}></ul>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                        <div className={style.box1inner1}>

                                            <div className={style.innerbox1}>

                                                <div className={style.info1}>

                                                    <div className={style.info1inner}>
                                                        <i className={'fa-solid fa-quote-left'}></i>
                                                    </div>
                                                </div>
                                                <div className={style.info2}>
                                                    <div className={style.info2inner2}>
                                                        Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula.
                                                    </div>
                                                </div>

                                                <div className={style.info3}>
                                                    <div className={style.info3inner3}>
                                                        <div className={style.info3image}>
                                                            <a href="#">
                                                                <img height={60} width={60} src="" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className={style.info3detailes}>
                                                            <a className={style.info3a1} href="#">Mike Kenli</a>
                                                            <a className={style.info3a2} href="#">5 stars</a>
                                                            <ul className={style.info3ul}></ul>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* box2 */}

                                <div className={style.box1}>

                                    <div className={style.b1}>

                                        <div className={style.box1inner1}>

                                            <div className={style.innerbox1}>

                                                <div className={style.info1}>

                                                    <div className={style.info1inner}>
                                                        <i className={'fa-solid fa-quote-left'}></i>
                                                    </div>
                                                </div>
                                                <div className={style.info2}>
                                                    <div className={style.info2inner2}>
                                                        Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula.
                                                    </div>
                                                </div>

                                                <div className={style.info3}>
                                                    <div className={style.info3inner3}>
                                                        <div className={style.info3image}>
                                                            <a href="#">
                                                                <img height={60} width={60} src="http://gpumps.oceanwp.org/wp-content/uploads/2021/07/0001_Calque-4.png" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className={style.info3detailes}>
                                                            <a className={style.info3a1} href="#">Mark Lugwid</a>
                                                            <a className={style.info3a2} href="#">5 stars</a>
                                                            <ul className={style.info3ul}></ul>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                        <div className={style.box1inner1}>

                                            <div className={style.innerbox1}>

                                                <div className={style.info1}>

                                                    <div className={style.info1inner}>
                                                        <i className={'fa-solid fa-quote-left'}></i>
                                                    </div>
                                                </div>
                                                <div className={style.info2}>
                                                    <div className={style.info2inner2}>
                                                        Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula.
                                                    </div>
                                                </div>

                                                <div className={style.info3}>
                                                    <div className={style.info3inner3}>
                                                        <div className={style.info3image}>
                                                            <a href="#">
                                                                <img height={60} width={60} src="" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className={style.info3detailes}>
                                                            <a className={style.info3a1} href="#">Lola Miles</a>
                                                            <a className={style.info3a2} href="#">5 stars</a>
                                                            <ul className={style.info3ul}></ul>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>

                                    </div>

                                </div>



                            </div>



                        </div>

                    </div>

                </div>

                {/* Last Part */}

                <div className={style.last}>
                    <div className={style.lastinnaer}>
                        <div className={style.lastmain}>
                            <div className={style.lastinner1}>
                                <p>TELLUS LUCTUS NEC ULLAMCORPER MATTIS PULVINAR DAPIBUS LEO</p>
                            </div>
                            <div className={style.lastinner2}>
                                <h2>NEWS & UPDATES</h2>
                            </div>

                            <div className={style.space}></div>

                            <div className={style.lastimages}>
                                <div className={style.lastbox1}>
                                    <div className={style.box1info}>
                                        <div className={style.box1image}>
                                            <a href="#">
                                                <img className={style.imagel} src={l1} alt="" />
                                            </a>
                                        </div>

                                        <div className={style.imageinfol}>
                                            <h2>
                                                <a href="#">Duis sagitis ipsum prasent</a>
                                            </h2>
                                        </div>

                                        <div className={style.lastlast}>
                                            <div className={style.comments}>
                                                <i className={`${style.comm} far fa-comment-alt`}></i>
                                                <a className={style.co} href="#">0 Comments</a>
                                            </div>
                                            <div className={style.cat}>
                                                <i className={`${style.comm} far fa-folder-open`}></i>
                                                <a className={style.co} href="#">Tips</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.lastbox1}>
                                    <div className={style.box1info}>
                                        <div className={style.box1image}>
                                            <a href="#">
                                                <img className={style.imagel} src={l2} alt="" />
                                            </a>
                                        </div>

                                        <div className={style.imageinfol}>
                                            <h2>
                                                <a href="#">Tortor neque adpiscing diam</a>
                                            </h2>
                                        </div>

                                        <div className={style.lastlast}>
                                            <div className={style.comments}>
                                                <i className={`${style.comm} far fa-comment-alt`}></i>
                                                <a className={style.co} href="#">0 Comments</a>
                                            </div>
                                            <div className={style.cat}>
                                                <i className={`${style.comm} far fa-folder-open`}></i>
                                                <a className={style.co} href="#">Tips</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.lastbox1}>
                                    <div className={style.box1info}>
                                        <div className={style.box1image}>
                                            <a href="#">
                                                <img className={style.imagel} src={l3} alt="" />
                                            </a>
                                        </div>

                                        <div className={style.imageinfol}>
                                            <h2>
                                                <a href="#">Vestibulum sapin prin quam</a>
                                            </h2>
                                        </div>

                                        <div className={style.lastlast}>
                                            <div className={style.comments}>
                                                <i className={`${style.comm} far fa-comment-alt`}></i>
                                                <a className={style.co} href="#">0 Comments</a>
                                            </div>
                                            <div className={style.cat}>
                                                <i className={`${style.comm} far fa-folder-open`}></i>
                                                <a className={style.co} href="#">Tips</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* footer */}

            </main >


        </>
    )
}

export default Homepages
