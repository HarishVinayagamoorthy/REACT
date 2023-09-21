import Card from './Card.jsx'
import {useState}  from 'react'
function App() {
 let  [count,setCount] = useState(0)


  const data = [
    {
      plan:"FREE",
      Price:"0",
      users:"Single User",
      usersEnabler:true,

      storage:"5GB Storage",
      storageEnabler:true,

      PublicProject:"Unlimited Public Project",
      PublicProjectEnabler:true,

      CommunityAccess:"CommunityAccess",
      CommunityAccessEnabler:true,

      PrivateProject:"Unlimited Private Project",
      PrivateProjectEnabler:false,

      Support:"Dedicated Phone Support",
      SupportEnabler:false,

      SubDomain:"Free Subdomain",
      SubDomainEnabler:false,

      Reports:"Monthly Status Reports",
      ReportsEnabler:false
    },

    {
      plan:"PLUS",
      Price:"9",
      users:"5 User",
      usersEnabler:true,

      storage:"50GB Storage",
      storageEnabler:true,

      PublicProject:"Unlimited Public Project",
      PublicProjectEnabler:true,

      CommunityAccess:"CommunityAccess",
      CommunityAccessEnabler:true,

      PrivateProject:"Unlimited Private Project",
      PrivateProjectEnabler:true,

      Support:"Dedicated Phone Support",
      SupportEnabler:true,

      SubDomain:"Free Subdomain",
      SubDomainEnabler:true,

      Reports:"Monthly Status Reports",
      ReportsEnabler:false,
    },

    {
      plan:"PRO",
      Price:"49",
      users:"Unlimited User",
      usersEnabler:true,

      storage:"150GB Storage",
      storageEnabler:true,

      PublicProject:"Unlimited Public Project",
      PublicProjectEnabler:true,

      CommunityAccess:"CommunityAccess",
      CommunityAccessEnabler:true,

      PrivateProject:"Unlimited Private Project",
      PrivateProjectEnabler:true,

      Support:"Dedicated Phone Support",
      SupportEnabler:true,

      SubDomain:" Unlimited Free Subdomain",
      SubDomainEnabler:true,

      Reports:"Monthly Status Reports",
      ReportsEnabler:true,
    }
  ]
   


  // const handleClick(){
  //   count++
  // }

  return (
    <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Card data = {e} key ={i}/>
          {/* Sending Data To Card Components By Using Pros=Properity */}
          
        })
      }
     
     
    
     
    </div>
    <div>
      <button  className='btn btn-danger d-flex justify-content-center'
       onClick={()=>{
          setCount(++count)
          console.log(count)



      }}>Click Me, I Was Already clicked {count} times
      </button>
    
    
    </div>
  </div>
</section>
    </>
  )
}

export default App
  