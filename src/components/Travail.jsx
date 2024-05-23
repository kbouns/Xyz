import React from 'react';
import Workitems from './Workitems';



const data = [
    {
        Année: "2024-2025",
        Title: 'Titre RNCP Développeur web et web mobile, Code de la fiche : "RNCP37674"',
        Duration: 'Octobre 2024 - Juillet 2025',
        details: 'Le développeur web et web mobile réalise des sites web ou web mobile sécurisés et des applications pour les entreprise web ou web mobile sécurisées destinées à des salariés. Il les développe avec des langages adaptés aux technologies dédiées pour les entreprise',
    },
    {
        Année: 2024,
        Title: 'FRANCE JUDO (FÉDÉRATION FRANCAISE DE JUDO FFJ) - Comptable Auxiliaire Polyvalent',
        Duration: 'Janvier 2022 - Mars 2024 (Intérim/CDD/CDI)',
        details: "Traitement de la comptabilité fournisseurs dans son ensemble jusqu’au bilan de la FFJDA et d’une SCI Contrôle des factures et validation des affectations analytiques auprès des responsables budgétaire, enregistrement comptable et règlements. Affecter les proratas de TVA. Classement et archivage lié à la fonction.Suivi des immobilisations et inventaire,Prévisions des dépenses de trésorerie la fonction nécessite également une polyvalence (comptabilité clients, notes de frais, banques et rapprochements bancaires).",
        Tools: "Logiciel : Adfi (Sigma)",
    },
    {
        Année: 2020,
        Title: 'ASSOCIATION ELYSEES MARBEUF FORMATION / GROUPE GIFT - Assistant comptable en alternance, Comptabilité Bancaire',
        Duration:'Octobre 2019 - Août 2020',
        details: 'Saisie quotidienne bancaire de plusieurs entités (Supsante/IAAG/ Groupe Gift/Association ITE/Association IAAG, Paroptic). Saisie Virement Bancaire. Rapprochement Bancaire. Remise de chèque des écoles / Encaissement des nouveaux chèques d’élèves. Classer et archiver les pièces et documents comptables.',
        Tools: "Logiciels : Ciel Compta / Excel / Exacompta",
    },
    {
        Année: 2018,
        Title: 'BOCO - Assistant comptable (Stage), Comptabilité Fournisseur ',
        Duration: 'Novembre - Décembre 2018 (5 Semaines)',
        details: 'Saisie des piéces comptables sur Ciel Compta Lettrage Rapprochement Bancaire. ',
        Tools: "Logiciel : Sage 100c",
    },
    {
        Année: 2017,
        Title: 'CABINET AMBOISE AUDIT (NICOLAS CROCHET) Assistant comptable (Stage) - Comptabilité Générale',
        Duration: 'Octobre - Décembre 2017 (4 Semaines)',
        details: 'Bulletins DSN Taxe Salaires Mise à jour Achats, Ventes, Trésorerie, Facturations.',
        Tools : 'Logiciel : Ciel Compta'
    },
    {
        Année: 2016,
        Title: 'U.S GRIGNY TENNIS - Assistant comptable (Stage), Comptabilité Client',
        Duration: 'Décembre 2016 (4 Semaines)',
        details: 'Saisie des piéces comptables sur Ciel Compta Tenue de Livre de Caisse. Tenue de la Trésorerie Relevé & Rapprochement bancaire',
        Tools : 'Logiciel : Ciel Compta'
    },
    {
        Année: 2016,
        Title: 'ANK EXPERTISES COMPTABLE - PARIS 19ème - Assistant comptable (Stage), Comptabilité Client - Fournisseur',
        Duration: 'Mai - Juillet 2016 (6 semaines)',
        details: 'Enrengistrement comptable de Vente, Achat, Rélevé Bancaire État de rapprochement bancaire. Recopier le Bilan sur un fichier Officiel (documents : 2065,2033).',
        Tools : 'Logiciel : Ciel Compta'
    },
];

const Travail = () => {
    return (
        <div id='travail' className='max-w-[1040px] m-auto md:pl-20 p-4 py-15'>
            <h1 className='text-4xl font-bold m-4 text-center text-[#001b5e]'>Expérience Professionnelle</h1>
            {data.map((item, idx) => (
                <Workitems
                    key={idx}
                    Année={item.Année}
                    Title={item.Title}
                    Duration={item.Duration}
                    details={item.details}
                    Tools={item.Tools}
                />
            ))}

        </div>  
        

    );
};

export default Travail;
