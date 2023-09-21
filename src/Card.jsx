import React from 'react'

function Card(props) { 
  return <>
   <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
              <h6 className="card-price text-center">${props.data.Price}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li className={props.data.usersEnabler?'':"text-muted"}><span className="fa-li"><i className={props.data.usersEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.users}</li>
                <li className={props.data.storageEnabler?'':"text-muted"}><span className="fa-li"><i className={props.data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
                <li className={props.data.PublicProjectEnabler?'':"text-muted"}><span className="fa-li"><i className={props.data.PublicProjectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PublicProject}</li>
                <li className={props.data.CommunityAccessEnabler?'':"text-muted"}><span className="fa-li"><i className={props.data.CommunityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.CommunityAccess}</li>
                <li className={props.data.PrivateProjectEnabler?'':"text-muted"}><span className="fa-li"><i className={props.data.PrivateProjectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PrivateProject}</li>
                <li className={props.data.SupportEnabler?'':"text-muted"}><span className="fa-li"><i className={props.data.SupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Support}</li>
                <li className={props.data.SubDomainEnabler?'':"text-muted"}><span className="fa-li"><i className={props.data.SubDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.SubDomain}                </li>
                <li className={props.data.ReportsEnabler?'':"text-muted"}><span className="fa-li"><i className={props.data.ReportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Reports}</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
  </>
}

export default Card