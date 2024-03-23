import "./cardEvent.css";
import { MoreVert } from "@material-ui/icons";
import { campaignRows } from "../../dataCampaign";
import { useState } from "react";

export default function CardEvent({ post }) {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUsername">
              {post.name}
            </span>
            {/* <span className="postLabel"></span> */}
          <span className="postDate">Start Date: {post.start}</span>
          {/* <span className="postLabel"></span> */}
          <span className="postDate">Final Date: {post.final}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          
          {/* <span className="postText">{post?.desc}</span> */}
        </div>
        
        <form>
            <button
            className="btnPost"
            alt=""
            >Detail</button>
            </form>
                    
      </div>
    </div>
  );
}