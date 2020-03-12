import React from "react";
import { Card } from "antd";

import { Avatar } from "antd";
import Photo from "../../assets/images/post-photo/photo-post.PNG";
import Like from "../../assets/images/icon-posts/like.png";
import Comment from "../../assets/images/icon-posts/comment.png";
const { Meta } = Card;
export default function post(props) {
  const { post_type } = props;
  if (post_type === "text")
    return (
      <Card
        actions={[
          <p>
            {
              <img
                alt="example"
                src={Like}
                style={{ width: 40, height: 30, paddingRight: 10 }}
              />
            }
            J'aime
          </p>,
          <p>
            {
              <img
                alt="example"
                src={Comment}
                style={{ width: 40, height: 30, paddingRight: 10 }}
              />
            }
            Commenter
          </p>
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Nom Membre"
          description="Membre fondateur "
          style={{ float: "left", marginRight: 12 }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left", marginRight: 12 }}>
          Bonjour, je voudrais rappeler les 2ème année INREV que la séance de
          synthèse d'images va se dérouler au labo RV.{" "}
        </p>{" "}
        <br />
        <p style={{ float: "left", marginRight: 12 }}>
          Je vous demande d'apporter vos PC avec VS installé afin de pouvoir
          compiler les librairies Opengl. Merci
        </p>
      </Card>
    );
  else if (post_type === "photo")
    return (
      <div>
        <br />
        <Card
          actions={[
            <p>
              {
                <img
                  alt="example"
                  src={Like}
                  style={{ width: 40, height: 30, paddingRight: 10 }}
                />
              }
              J'aime
            </p>,
            <p>
              {
                <img
                  alt="example"
                  src={Comment}
                  style={{ width: 40, height: 30, paddingRight: 10 }}
                />
              }
              Commenter
            </p>
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Nom Membre"
            description="This is the description"
            style={{ float: "left", marginRight: 12 }}
          />
          <br />
          <br />
          <br />

          {
            <img
              alt="example"
              src={Photo}
              style={{ width: 700, height: 300 }}
            />
          }
        </Card>
      </div>
    );
}
