import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import ox from "../projects/pic.jpg";
// import {  } from '../../store/actions/projectActions'
import { companyLogo } from "./kidney-stone 1.png";
import { rr } from "./e.png";
import ReactDOM from "react-dom";
import ReactSwipe from "react-swipe";

const ProjectDetails = (props) => {
  const { project, auth, users, profile } = props;
  var tbC = 0;
  let reactSwipeEl;

  // console.log(auth.uid == project[1].authurId)

  if (!auth.uid) return <Redirect to="/signin" />;
  console.log(users);

  if (project) {
    if (profile.Doctor) {
      return (
        <header className="">
          <headerb
            className="card z-depth-0"
            style={{ backgroundColor: "transparent" }}
          >
            <div
              className="card-content"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="left">
                <h1
                  className="left"
                  style={{
                    color: "blue ",
                    marginTop: "50px",
                    fontSize: "50px",
                  }}
                >
                  Result
                </h1>
                <br></br>
                <br></br>
                <div
                  style={{
                    border: "1px solid gray",
                    borderRadius: "40px",
                    marginTop: "80px",
                    height: "450px",
                    width: "550px",
                  }}
                >
                  <br></br>
                  <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: false }}
                    ref={(el) => (reactSwipeEl = el)}
                  >
                    {project.base64s &&
                      project.base64s.map((base64s) => {
                        tbC = tbC + 1;

                        return (
                          <div className="left-center">
                            <div style={{ marginLeft: "40px" }}>
                              <img src={base64s} style={{ height: "350px" }} />
                              <h2
                                style={{
                                  color: " grey ",
                                  fontSize: "20px",
                                  marginLeft: "200px",
                                }}
                              >
                                {tbC}
                              </h2>
                            </div>
                          </div>
                        );
                      })}
                  </ReactSwipe>
                  <h2
                    style={{
                      color: " grey ",
                      fontSize: "20px",
                      marginLeft: "170px",
                    }}
                  >
                    รูปทั้งหมด {tbC} รูป
                  </h2>
                </div>
                <br></br>
                <button
                  class="waves-effect waves-light btn-small white "
                  style={{
                    borderRadius: "30px",
                    marginLeft: "150px",
                    color: " grey ",
                  }}
                  onClick={() => reactSwipeEl.prev()}
                >
                  Previous
                </button>
                <button
                  class="waves-effect waves-light btn-small white "
                  style={{ borderRadius: "30px", color: " grey " }}
                  onClick={() => reactSwipeEl.next()}
                >
                  Next
                </button>

                <br></br>
                <div className="left">
                  <span
                    className="card-title"
                    style={{ marginTop: "25px", color: "Black" }}
                  >
                    <p style={{ fontSize: "35px" }}>
                      ชื่อ : {project.firstName} {project.lastName}{" "}
                    </p>
                    <p style={{ fontSize: "25px" }}>อายุ : {project.age}</p>
                  </span>
                </div>
              </div>

              <div
                className="center"
                style={{ backgroundColor: "", fontSize: "150px" }}
              >
                {project.result <= 50 ? (
                  <p
                    clasName="my-2"
                    style={{
                      color: "green",
                      fontSize: "85px",
                      marginTop: "75px",
                    }}
                  >
                    {" "}
                    {project.result} %
                  </p>
                ) : project.result >= 70 ? (
                  <p
                    clasName="my-2"
                    style={{
                      color: "red",
                      fontSize: "85px",
                      marginTop: "75px",
                    }}
                  >
                    {" "}
                    {project.result} %
                  </p>
                ) : (
                  <p
                    clasName="my-2"
                    style={{
                      color: "orange",
                      fontSize: "85px",
                      marginTop: "75px",
                    }}
                  >
                    {" "}
                    {project.result} %{" "}
                  </p>
                )}

                <div></div>
              </div>
              <div
                className="left "
                style={{ marginLeft: "150px", color: "Black" }}
              >
                <p style={{ fontSize: "25px", marginLeft: "30px" }}>
                  Specificgravity : {project.gravity}
                </p>
                <p style={{ fontSize: "25px", marginLeft: "190px" }}>
                  Ph : {project.ph}{" "}
                </p>
                <p style={{ fontSize: "25px", marginLeft: "120px" }}>
                  Glucose : {project.glu}{" "}
                </p>
                <p style={{ fontSize: "25px", marginLeft: "130px" }}>
                  Ketone : {project.ketone}{" "}
                </p>
                <p style={{ fontSize: "25px", marginLeft: "160px" }}>
                  WBC : {project.WBC}{" "}
                </p>

                <p style={{ fontSize: "25px", marginLeft: "145px" }}>
                  Blood : {project.blood}{" "}
                </p>
                <p style={{ fontSize: "25px", marginLeft: "9px" }}>
                  Oxalate of urine : {project.calox1}{" "}
                </p>
                <p style={{ fontSize: "25px", marginLeft: "52px" }}>
                  WBC of urine : {project.WBC1}{" "}
                </p>
                <p style={{ fontSize: "25px", marginLeft: "55px" }}>
                  RBC of urine : {project.RBC}{" "}
                </p>
                <p style={{ fontSize: "25px", marginLeft: "75px" }}>
                  Sq of urine : {project.Sq}{" "}
                </p>
              </div>
            </div>
          </headerb>

          {/* <div className="input-field " >
            <label htmlFor="content" style={{marginTop:'1px'}}>การวินิจฉัยเพิ่มเดิม และคำแนะนำของแพทย์</label>
            <input type="text" step="any" id='command'style={{borderRadius:"5px",height:"5" ,width:"1"}} onChange={this.handleChange} /> 
              
      
          </div>
          
          <div className="button">
            <button className="btn blue lighten-1" style={{borderRadius:"5px" }} >Submit</button>
          </div> */}
          <div id="faq" className="">
            <div className="container">
              <div className="col-lg-8 col-xl-7 mx-auto text-center mb-5">
                <div>
                  <p
                    className="card-2__title mb-2"
                    style={{ fontSize: "20px" }}
                  >
                    แนวโน้มและความรุนแรง
                  </p>
                  {project.result <= 50 ? (
                    <p
                      clasName="my-2"
                      style={{
                        color: "green",
                        fontSize: "35px",
                        marginTop: "65px",
                      }}
                    >
                      อยู่ในเกณฑ์มาตราฐาน
                    </p>
                  ) : project.result >= 70 ? (
                    <p
                      clasName="my-2"
                      style={{
                        color: "red",
                        fontSize: "35px",
                        marginTop: "65px",
                      }}
                    >
                      มีความเสี่ยงสูง
                    </p>
                  ) : (
                    <p
                      clasName="my-2"
                      style={{ color: "orange", fontSize: "35px" }}
                    >
                      มีความเสี่ยงต่ำ{" "}
                    </p>
                  )}
                  {project.result <= 50 ? (
                    <p
                      clasName="my-2"
                      style={{
                        color: "green",
                        fontSize: "18px",
                        marginTop: "65px",
                      }}
                    >
                      อยู่ในเกณฑ์มาตราฐาน ดูแลสุขภาพได้ดี
                      หากต้องการป้องกันความเสี่ยงในการเป็นนิ่วควรทำตามข้อแนะนำ
                    </p>
                  ) : project.result >= 70 ? (
                    <p
                      clasName="my-2"
                      style={{
                        color: "red",
                        fontSize: "18px",
                        marginTop: "65px",
                      }}
                    >
                      มีความเสี่ยงสูง ควรไปโรงพยาบาลเพื่อพบผู้เชี่ยวชาญ
                      และดูแลตัวเองให้มากขึ้น
                    </p>
                  ) : (
                    <p
                      clasName="my-2"
                      style={{ color: "orange", fontSize: "18px" }}
                    >
                      มีความเสี่ยงต่ำ ควรปรับการบริโภคอาหารและปฏิบัติตามข้อแนะนำ
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            {/* HEADER */}
            <div className="block__header col-lg-8 col-xl-7 mx-auto center"></div>

            {/* ======================================== */}
            <div
              id="faq"
              className="block-39 space-between-blocks"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="container">
                <form className="">
                  <div className="input-field">
                    <input
                      type="text"
                      step="any"
                      id="comment"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "white",
                        height: "100px",
                      }}
                    />
                    <label htmlFor="content">
                      ข้อแนะนำและวินิจฉัยเพิ่มเติม
                    </label>
                  </div>
                  <div className="button">
                    <button
                      className="btn blue lighten-1 "
                      style={{ borderRadius: "20px", color: "white" }}
                    >
                      Submit
                    </button>
                    <div className=" green-text">
                      {<p>sent successfully</p>}
                    </div>
                  </div>
                </form>
                {/* HEADER */}
                {/* <div className="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 className="hero__title mb-3">
          <span className="highlight">ข้อควรระวัง และ คำแนะนำ</span>เพื่อป้องกัน
          <span className="highlight">การเกิดโรคนิ่ว</span>
        </h1>
      </div> */}

                {/* <div className="row px-2">
        <div className="col-lg-6">
          <div className="content-block">
            <h4 className="content-block__title">
              การรักษาโรคนิ่วโดยวิธีการสลายนิ่ว
            </h4>
            <p className="content-block__paragraph">
              การสลายนิ่ว คือ การรักษาโรคนิ่วโดยการทำให้นิ่วแตกออกเป็นชิ้นเล็กๆ
              โดยพลังงานเสียงที่เกิดจากการสั่นสะเทือนของคลื่นแม่เหล็กไฟฟ้าจากภายนอกร่างกาย
              ซึ่งพลังงานนี้จะผ่านเข้าสู่ร่างกายโดยไม่มีการทำลายเนื้อเยื่อ
              หลังจากที่นิ่วแตกออกเป็นชิ้นเล็กๆแล้ว จะหลุดปนออกมากับปัสสาวะ
              เป็นการรักษาที่ไม่จำเป็นต้องฉีดยาชา ไม่ต้องดมยาสลบใดๆ
              ผู้ป่วยจะรู้สึกตัวตลอดเวลาที่ทำการรักษา
              ไม่มีแผลหรือท่อระบายใดๆออกมานอกร่างกาย
              ผู้ป่วยสามารถกลับไปพักฟื้นที่บ้านได้หลังจากรับการรักษาแล้ว
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content-block">
            <h4 className="content-block__title">
              เป็นนิ่วรักษาอย่างไร? นิ่วรักษาได้หรือไม่?
            </h4>
            <p className="content-block__paragraph">
              นิ่วในไตสามารถรักษาได้ ทั้งนี้ขึ้นอยู่กับขนาดของนิ่ว ชนิดของนิ่ว
              และร่างกายของผู้ป่วย ซึ่งสามารถรักษาได้โดย
              <br />
              1.ดื่มน้ำมากๆ เพื่อช่วยขับก้อนนิ่วออกมาพร้อมปัสสาวะ
              ในกรณีที่นิ่วมีขนาดเล็กกว่า 5 มิลลิเมตร
              <br />
              2.รักษาด้วยวิธีการผ่าตัดเอานิ่วออกมา เช่น การใช้คลื่นเสียงสลายนิ่ว
              การส่องกล้อง การผ่าตัดต่อมไทรอยด์ เป็นต้น
              สำหรับผู้ที่เคยเป็นโรคนิ่วในไตควรปรับเปลี่ยนพฤติกรรมตนเอง
              โดยควรหลีกเลี่ยงอาหารที่มีสารก่อนิ่วสูง อย่ากลั้นปัสสาวะ
              ควรปัสสาวะให้มากกว่า 2.5 ลิตรต่อวัน และเข้ารับการตรวจติดตามโรคทุกๆ
              3 – 6 เดือน เพื่อป้องกันการเกิดนิ่วซ้ำ
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content-block">
            <h4 className="content-block__title">
              สาเหตุของการเกิดนิ่วในทางเดินปัสสาวะมีอะไรบ้าง
            </h4>
            <p className="content-block__paragraph">
              สาเหตุของการที่ทำให้เกิดมีการรวมตัวกันของผลึกของเกลือแร่หรือ
              หินปูนเป็น ก้อนนิ่วยังไม่มีใครทราบแน่นอน แต่จะมีเหตุ
              บางอย่างซึ่งจะช่วยส่งเสริมทำให้เกิดมี นิ่วเกิดขึ้นได้ง่าย เช่น
              ภาวะที่มีการคั่งของน้ำปัสสาวะอยู่ในกระเพาะปัสสาวะ ในผู้ป่วย ชาย
              ซึ่งเป็นโรคต่อมลูกหมากโต
              ปัสสาวะที่ค้างในกระเพาะปัสสาวะก็จะเป็นสาเหตุ
              ให้เกิดมีนิ่วเกิดขึ้นหรือในผู้ป่วยบางประเภท ซึ่งน้ำ
              ปัสสาวะมีความเข้มข้นของเกลือแร่ มาก เช่น ดื่มน้ำน้อยกว่าปกติ
              หรือรับประทานอาหารบางประเภท ซึ่งมีเกลือแร่ขับออก มาทางน้ำ
              ปัสสาวะมาก เช่น พวกเครื่องในสัตว์หรือพวกผักสด หน่อไม้ เป็นต้น
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content-block">
            <h4 className="content-block__title">
              ในทางการแพทย์จะมีวิธีตรวจผู้ป่วยเป็นโรคนิ่วอย่างไรบ้าง
            </h4>
            <p className="content-block__paragraph">
              ผู้ป่วยที่สงสัยว่าเป็นโรคนิ่ว ควรจะมาพบแพทย์ จะได้ทำการซักประวัติ
              ตรวจ ร่างกาย และตรวจน้ำปัสสาวะ
              ซึ่งอาจจะพบว่ามีเม็ดเลือดแดงหรือเม็ดเลือดขาว ในน้ำ ปัสสาวะ
              และอาจต้องส่งผู้ป่วยไปเอกซเรย์บริเวณไตและกระเพาะปัสสาวะ
              ซึ่งจะทำให้ บอกได้ว่าผู้
              ป่วยคนนั้นมีนิ่วในระบบทางเดินน้ำปัสสาวะหรือไม่
            </p>
          </div>
        </div>
        </div> */}
              </div>
            </div>
          </div>

          <div
            className="card-action grey lighten-4 grey-text"
            style={{ backgroundColor: "transparent" }}
          >
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </header>
      );
    } else {
      return (
        <header className="">
          <headerb
            className="card z-depth-0"
            style={{ backgroundColor: "transparent" }}
          >
            <div
              className="card-content"
              style={{ backgroundColor: "transparent" }}
            >
              <h1 className="right">
                <p
                  style={{
                    color: "blue ",
                    marginTop: "150px",
                    fontSize: "15px",
                  }}
                >
                  ที่มีผลต่อการเกิดโรคนิ่วทั้งหมด
                  <p style={{ color: "blue ", fontSize: "15px" }}>
                    จำนวน {project.calox1} ผลึก
                  </p>
                </p>
                <p
                  style={{
                    color: "blue ",
                    marginTop: "100px",
                    fontSize: "30px",
                  }}
                >
                  คำแนะนำจากแพทย์
                </p>

                <div className="left">
                  {project.result <= 50 ? (
                    <p
                      className="my-2"
                      style={{
                        color: "green",
                        fontSize: "15px",
                        marginTop: "85px",
                      }}
                    >
                      {" "}
                      <p>
                        {" "}
                        อยู่ในเกณฑ์มาตรฐาน
                        ดูแลสุขภาพได้ดีหากหลักเลี่ยงในการเป็นควรวรดูแลตัว เอง
                      </p>
                      โดยการดื่มน้ำสะอาดให้เพียงพอ
                      ลดอาหารประเภทอาหารที่มีโซเดียมสูง ช็อคโกแลต ผักปวยเล้ง
                      มันเทศ ผลิตภัณฑ์ถั่วเหลือง
                    </p>
                  ) : project.result >= 70 ? (
                    <p
                      className="my-2"
                      style={{
                        color: "red",
                        fontSize: "15px",
                        marginTop: "75px",
                      }}
                    >
                      <p>
                        มีความเสี่ยงค่อนข้างมาก
                        ควรไปโรงพยาบาลเพื่อพบผู้เชี่ยวชาญและดูแลตัว เอง
                      </p>
                      โดยการดื่มน้ำสะอาดให้เพียงพอ
                      งดอาหารประเภทอาหารที่มีโซเดียมสูง ช็อคโกแลต ผักปวยเล้ง
                      มันเทศ ผลิตภัณฑ์ถั่วเหลือง
                    </p>
                  ) : (
                    <p
                      className="my-2"
                      style={{
                        color: "orange",
                        fontSize: "15px",
                        marginTop: "75px",
                      }}
                    >
                      <p>
                        มีความเสี่ยงต่ำ ควรดูแลตัว
                        เองโดยการดื่มน้ำสะอาดให้เพียงพอ{" "}
                      </p>
                      ลดอาหารประเภทอาหารที่มีโซเดียมสูง ช็อคโกแลต ผักปวยเล้ง
                      มันเทศ ถั่ว ผลิตภัณฑ์ถั่วเหลือง
                    </p>
                  )}
                </div>
              </h1>
              <h1
                className="left"
                style={{ color: "blue ", marginTop: "50px", fontSize: "50px" }}
              >
                Result
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="left">
                {project.result <= 50 ? (
                  <p
                    className="my-2"
                    style={{
                      color: "green",
                      fontSize: "75px",
                      marginTop: "85px",
                    }}
                  >
                    {" "}
                    อยู่ในเกณฑ์มาตรฐาน
                  </p>
                ) : project.result >= 70 ? (
                  <p
                    className="my-2"
                    style={{
                      color: "red",
                      fontSize: "75px",
                      marginTop: "75px",
                    }}
                  >
                    มีความเสี่ยงสูง
                  </p>
                ) : (
                  <p
                    className="my-2"
                    style={{
                      color: "orange",
                      fontSize: "75px",
                      marginTop: "75px",
                    }}
                  >
                    มีความเสี่ยงต่ำ
                  </p>
                )}
                {project.result <= 50 ? (
                  <p
                    className="my-2 center"
                    style={{
                      color: "green",
                      fontSize: "85px",
                      marginLeft: "125px",
                    }}
                  >
                    {project.result} %
                  </p>
                ) : project.result >= 70 ? (
                  <p
                    className="my-2 center"
                    style={{
                      color: "red",
                      fontSize: "85px",
                      marginTop: "75px",
                    }}
                  >
                    {" "}
                    {project.result} %
                  </p>
                ) : (
                  <p
                    className="my-2 center"
                    style={{
                      color: "orange",
                      fontSize: "85px",
                      marginTop: "75px",
                    }}
                  >
                    {" "}
                    {project.result} %{" "}
                  </p>
                )}

                <p style={{ color: "black", marginLeft: "90px" }}>
                  เปอร์เซ็นต์ความเสี่ยงในการเกิดโรคนิ่ว{" "}
                </p>
                {project.result <= 50 ? (
                  <img
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/336108270_993931481579830_8494926262605599139_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeGmt4bVOcbKufNsHBjyzw_Zg2DXKuG-vcSDYNcq4b69xD0JSrsm-dNCDjlqoP4tCl1pav_55KnKUiPAkAwNRs-5&_nc_ohc=3c90LoBQf6kAX-2ROmS&_nc_ht=scontent.xx&oh=03_AdQHjvKYFn-q6XvkBOTNEv_snkXnqczVyWTQgMU5sF-QyA&oe=64407D92"
                    style={{
                      width: "350px",
                      marginTop: "50px",
                      marginLeft: "40px",
                    }}
                    width={"80%"}
                  ></img>
                ) : project.result >= 70 ? (
                  <img
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/336025199_1296607087590341_6908137646655010366_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHh5Xn7mLKvtekfrWzBpnGo9RKpwR7W9dj1EqnBHtb12Kd7aHN4vo8PjlJ6WQPCG8bdDd4BTv2XgbSxnh_zEMKK&_nc_ohc=rgInXvqNc0kAX-CYMuE&_nc_ht=scontent.xx&oh=03_AdSA_pIY5Dtt396MwCKKphl3T593FeaESlEOHnfh6HR5FQ&oe=64405EFA"
                    style={{
                      width: "350px",
                      marginTop: "50px",
                      marginLeft: "40px",
                    }}
                    width={"80%"}
                  ></img>
                ) : (
                  <img
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/336481669_908940573561989_7714261876465577519_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeF5QgovbdUDEgas3Vp-zBqGHDn2HFA7mkocOfYcUDuaSupgWJU7LXZZSyE0nXlCA3vpk4mRJYFNswZTXuvoBHal&_nc_ohc=kQFVEzEBOQkAX_YJVEc&_nc_ht=scontent.xx&oh=03_AdTfqtY2OQVeOvXz6GjUDbjqrwkY-eEbvZOuMiJmOgmkWQ&oe=64406BFF"
                    style={{
                      width: "350px",
                      marginTop: "50px",
                      marginLeft: "40px",
                    }}
                    width={"80%"}
                  ></img>
                )}
              </div>
            </div>
          </headerb>
          <div></div>
        </header>
      );
    }
  } else {
    return (
      <div className="container center">
        <p>Processing...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }, { collection: "users" }])
)(ProjectDetails);
