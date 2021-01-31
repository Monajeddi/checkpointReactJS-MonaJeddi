
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      
      
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mona & Cie</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Accueil <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">A propos<span class="sr-only">(current)</span> </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Nos Expertises
        </a>
        
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">

      <button class="btnn " type="submit">Contact</button>
      
    </form>
  </div>
</nav>


<section >
  <div class="test">
     <h1>Your brand deserves to shine</h1>
  <p>Débloquez un immense potentiel de trafic en choisissant des stratégies marketing digital adaptées à votre domaine d’activité. <br/>
  Nos consultants 
    spécialisés vous proposent des solutions personnalisées pour atteindre vos objectifs.</p>
    
  </div>
   
  
</section>

 <section class="blocks">
   <div class="adress">
     <h2>Un besoin, Un projet ?</h2>
     <h5>Nous sommes à votre disposition pour l’étudier et répondre à vos questions.</h5>
   
    <iframe src="https://www.google.com/maps/d/u/5/embed?mid=1OqmTWOcV1eVoNZrmBf5-KBPJuiCQ-3cE" width="600" height="400"></iframe> 
   </div>

<div class="forms">
  <form>
  <div class="form-group">
    <div class="name">
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nom"/>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Prénom"/>
    </div>
    
  
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Téléphone</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Objet</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option>  </option>
      <option>Conseil et Accompagnement</option>
      <option>Création de site Web</option>
      <option>E-Réputation</option>
      <option>Stratégie Digitale</option>
      <option>Stratégie Inbound Marketing</option>
      <option>Stratégie Réseaux Sociaux</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Envoyer</button>
</form>

</div>

 </section>

{/* footer */}

<div class="card-group">
  <div class="card">
  
    <div class="card-body">
      <h5 class="card-title">À propos</h5>
      <p class="card-text">Notre Agence</p>
      <p class="card-text">Contact</p>
      <p class="card-text">Mentions Légales</p>
      <p class="card-text">Politique de confidentialité</p>
    </div>
  </div>


  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Coordonnées</h5>
      <p class="card-text"> Mona & Cie</p>
      <p class="card-text">01 Rue Saint Denis</p>
      <p class="card-text">Téléphone: 06 65 07 65 37</p>
      <p class="card-text">m.monajeddi@gmail.com</p>
     
</div> 

    </div>
    


  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Newsletter</h5>
      <p class="card-text"> Recevez toute l'actualité du Marketing Digital</p>

       <form>
  <div class="form-group">
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Entrez votre adresse mail"/>
    
  </div>
  
  
  <button type="submit" class="btn btn-primary">Abonnez-vous</button>
</form> 
    </div>
    
  </div>
</div>



    </div>
  );
}

export default App;
