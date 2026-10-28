import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Services" des="Mes activités" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
        <Card
          title="Création de site vitrine - 200 000 ar"
          des="Entre 5 et 10 pages, le site vitrine présente une société, ses prestations
          ou ses produits sans proposer de vente en ligne. SEO inclus, sans hebergement"
          icon={<FaGlobe />}
        />
        <Card
          title="Création de site e-commerce - 1 500 000 ar"
          des=" - Pages illimitées
          Compatible iphone,tablette, PC,Mac
          Installation par nos soins
          site en 1 langue
          15 produits (installés par nos soins)
          Module panier, module de livraison
          Module de paiement : Paypal, carte de crédit, mobile money
          Autres modules : slider d'images ,google map,réseaux sociaux, galerie photos & vidéos,actualités
          6 pages internes de textes installées
          1 formulaire de contact/devis
          Contenus optimisés SEO"
          icon={<FaGlobe />}
        />
        <Card
          title="Refonte de site internet"
          des="Votre site internet est obsolète ? 
          Vous changez de positionnement ou de stratégie ?"
          icon={<AiFillAppstore />}
        />
        <Card
          title="Référencement naturel - SEO"
          des="Pour générer du trafic, un site internet doit être
          bien positionné après la saisie d’une requête."
          icon={<SiProgress />}
        />
        <Card
          title="Création identité visuelle"
          des="Elle est la base de votre stratégie marketing. 
          Elle doit attirer votre client, être claire et facilement mémorisable."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
}

export default Features
