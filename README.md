Learning docker documentation and guild by Ayomiku Olatunji 
<!-- Docker is a  -->
<div>
     <h1>Docker with node and expressjs</h1>
     <p>What is nodejs? Nodejs is javascript runtime enviroment for building server-side applications, cross platfrom application and it runs on Google V8 Engine built with c++</p>
     <p>Docker allow us to containerized our node-express application for optimisation, CI && CD and othet benefits.</p>
</div>
<div>
      <h1>Step to get started</h1>
      <ul>
       <li>Visit hub.docker.com to create an account</li>
        <li>Create a new folder manually on your local machine or open your terminal and type these  command <br/> <span style="color:'blue'">cd Desktop </span> <br/> <span style="color:'blue'">mkdir docker</span> <br/> <span style="color:'blue'">cd docker . </span> </li>
        sudo docker run -v $(pwd):/app -p 8080:8080 -it   nodejs-image
      </ul>
</div>