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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-120 xl:gap-20">
        <Card
          title="Création de site vitrine - à partir de 200 000 ar"
          des="Entre 5 et 10 pages, le site vitrine présente une société, ses prestations, responsive,
          ou ses produits sans proposer de vente en ligne. SEO inclus, sans hebergement"
          icon={<FaGlobe />}
        />
        <Card
          title="Création de site e-commerce - à partir de 1 300 000 ar"
          des=" - Pages illimitées, site responsive, site en 1 langue, 15 produits
          Module panier, module de livraison,Module de paiement : Paypal, carte de crédit, mobile money
          Autres modules : slider d'images ,google map,réseaux sociaux, galerie photos & vidéos,actualités
          6 pages internes de textes installées, 1 formulaire de contact/devis, Contenus optimisés SEO"
          icon={<FaGlobe />}
        />
        <Card
          title="Refonte de site vitrine - à partir de 400 000 ar"
          des="Votre site internet est obsolète ? 
          ajustement graphique, correction de bugs, structure de base"
          icon={<AiFillAppstore />}
        />
        <Card
          title="Référencement naturel - SEO - à partir de 400 000 ar"
          des="Pour générer du trafic, un site internet doit être
          bien positionné après la saisie d’une requête."
          icon={<SiProgress />}
        />
        <Card
          title="Création identité visuelle"
          des="Logo et logotype, Charte graphique, Carte de visite, Papier à en-tête, Signature e-mail"
          icon={<SiAntdesign />}
        />
        <Card
          title="Visuels pour les réseaux sociaux"
          des="Publications Facebook et Instagram, Stories et Reels (couvertures, Carrousels informatifs, Bannières de couverture, Miniatures YouTube, Visuels publicitaires."
          icon={<SiAntdesign />}
        />
        <Card
          title="Supports publicitaires et marketing"
          des="Affiches publicitaires, Flyers, Dépliants, Brochures, Bannières web, Panneaux publicitaires, Roll-up."
          icon={<SiAntdesign />}
        />
        <Card
          title="Packaging et produits"
          des="Emballages de produits, Étiquettes, Boîtes personnalisées, Sacs commerciaux, Stickers, Design de bouteilles et flacons"
          icon={<SiAntdesign />}
        />
        <Card
          title="Packaging et produits"
          des="Emballages de produits, Étiquettes, Boîtes personnalisées, Sacs commerciaux, Stickers, Design de bouteilles et flacons"
          icon={<SiAntdesign />}
        />
        <Card
          title="Supports événementiels"
          des="Invitations, Affiches de concerts, Billets et tickets, Badges événementiels, Visuels pour conférences"
          icon={<SiAntdesign />}
        />
        <Card
          title="Édition et mise en page"
          des="Couvertures de livres, Magazines, Catalogues, Menus de restaurants, CV professionnels"
          icon={<SiAntdesign />}
        />
        <Card
          title="Design digital (Web et UI)"
          des="Maquettes de sites web, Interfaces d'applications mobiles, Bannières digitales, Icônes, Newsletters, Visuels pour boutiques en ligne"
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
}

export default Features
