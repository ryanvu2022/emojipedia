import React from "react";

const Entry = props => {
   return (
      <div className="term">
         <dt>
         <span className="emoji" role="img" aria-label="Tense Biceps">{props.icon}</span>
         <span>{props.term}</span>
         </dt>
         <dd>{props.description}</dd>
      </div>
   )
}

export default Entry;
