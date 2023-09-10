import { MockRestaurant } from "@/interfaces/mock-restaurant.interface";

export const mockRestaurants: MockRestaurant[] = [
    {
        id: 1,
        image: 'https://10619-2.s.cdn12.com/rests/original/102_529717834.jpg',
        title: 'MONE',
        desc: 'Restaurantul "MONE" este un loc sofisticat și plin de rafinament situat în inima orașului. Cu o atmosferă elegantă și modernă, "MONE" își întâmpină oaspeții cu o paletă culinară desăvârșită și un serviciu impecabil.',
        hot: true,
        price: 1,
        __html: `<iframe class="mt-4 w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11105.45607949001!2d28.190917!3d45.9040314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65d90bbc8663f%3A0x393b7fc7f54bc55e!2sMONE!5e0!3m2!1sen!2s!4v1694306030085!5m2!1sen!2s" style="border:0;" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        id: 2,
        image: 'https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1920,h_1080,c_limit/Prequel-lead.jpg',
        title: 'BelMondo',
        desc: '"BelMondo" este o oază de savoare și rafinament în mijlocul orașului, unde bucataria internațională se întâlnește cu influențe culinare tradiționale și moderne. ',
        hot: true,
        price: 2,
        __html: `<iframe class="mt-4 w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.863303689527!2d28.18663447650083!3d45.89404697108425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65dd66f4a2815%3A0xc32f0a9ba6b6f75b!2sBelMondo!5e0!3m2!1sen!2s!4v1694306385709!5m2!1sen!2s"  style="border:0;" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        id: 3,
        image: 'https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg',
        title: 'Storys',
        desc: '"Storys" este un restaurant cu o atmosferă plină de poveste, situat într-un cadru pitoresc cu vedere la oraș și la apă. Într-un ambient elegant și modern, acest loc unic vă invită să vă bucurați de o experiență culinară remarcabilă.',
        hot: false,
        price: 1,
        __html: `<iframe class="mt-4 w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.305963595066!2d28.190972576501306!3d45.90519227108461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65ddebb0938f5%3A0x88c8982e092ed6a2!2sStorys!5e0!3m2!1sen!2s!4v1694306446674!5m2!1sen!2s" style="border:0;" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        id: 4,
        image: 'https://images.getbento.com/accounts/0dd435255ed47ef59b07b494968680e4/media/images/12960PQ_CHICAGO_INTERIOR_FULL.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5',
        title: 'El Cafe',
        desc: '"El Cafe" este restaurantul perfect pentru cei care doresc să experimenteze un amestec vibrant de arome și culturi într-un decor metropolitan. Situat în inima orașului Cahul, acest loc este un omagiu adus diversității gastronomice, oferind o călătorie culinară prin metropolele lumii.',
        hot: false,
        price: 3,
        __html: `<iframe class="mt-4 w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.37917945293!2d28.18912857650128!3d45.903728271084454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65ceb55c7e347%3A0x22115744d4f50cfc!2sMetropolis!5e0!3m2!1sen!2s!4v1694306504967!5m2!1sen!2s"  style="border:0;" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        id: 5,
        image: 'https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_Seine_Tour_Eiffel_2.jpg',
        title: 'Legend Restaurant',
        desc: '"Legend Restaurant" este un loc emblematic și captivant în inima orașului, unde gastronomia devine o legendă. Cu o atmosferă ce amintește de povești vechi și un decor care îmbină elemente tradiționale și moderne, acest restaurant vă poartă într-o călătorie epică a gusturilor.',
        hot: true,
        price: 1,
        __html: `<iframe class="mt-4 w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.499231532811!2d28.185508976501097!3d45.90132767108439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65ceb4a612d65%3A0x4d3647e2df7fc274!2zIkVsIENhZmUi!5e0!3m2!1sen!2s!4v1694306626105!5m2!1sen!2s"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
]