import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import FurnitureContent from "./FurnitureContent";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

const itemMock = {
  items: [
    {
      brand: "Ballard Designs",
      condition: "New",
      decorStyle: "Mid-Century Modern",
      deliveryMethod: "Local pickup",
      description:
        "Discover the essence of elegant living with this exquisitely handcrafted table, blending modern design with traditional craftsmanship. Its sleek lines and robust wooden structure infuse a touch of unique charm into your living space. Every detail is meticulously refined, ensuring it's not just a practical piece of furniture but an artistic statement. Moreover, its multifunctional design makes it suitable for various settings, be it a formal office environment or a cozy home ambiance. Choose our table and elevate your space with distinctive style.",
      finsh: "Distressed",
      furnitureName: "Table",
      imageLink: "https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/table.jpg",
      material: "Metal",
      price: "40",
      sellerAddress: "1234 Elm Street, Springfield, MA 01234",
      sellerName: "Michael Johnson",
      sellerPhoneNumber: "123-456-7890",
    },
    {
      brand: "Ballard Designs",
      condition: "Used - Like new",
      decorStyle: "Contemporary",
      deliveryMethod: "Shipping",
      description:
        "Step into a world of elegance with this meticulously maintained, second-hand chair. Crafted with precision and passion, its timeless design complements any setting. Gently used, it retains its original charm and comfort, making it perfect for both style and relaxation. Why pay full price when you can own this classic piece at a fraction? It's not just a chair, it's an investment in quality. Don't miss out on this limited opportunity to elevate your space!",
      finish: "Distressed",
      furnitureName: "Chair",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20200424095419_mksoe.jpg",
      material: "Metal",
      price: "75",
      sellerAddress: "5678 Maple Lane, Rivertown, CA 56789",
      sellerName: "Emily Thompson",
      sellerPhoneNumber: "234-567-8901",
    },
    {
      brand: "Bernhardt Furniture",
      condition: "Used - Like new",
      decorStyle: "Industrial",
      deliveryMethod: "All",
      description:
        "Discover a treasure in this pre-loved sofa, radiating timeless elegance. Expertly crafted and gently used, it promises both comfort and style. Upholstered in pristine fabric, it remains as inviting as ever. Perfect for those seeking quality without the hefty price tag. A seamless blend of luxury and affordability, this sofa is more than just furniture – it's an experience waiting to be relished. Act fast and make this gem the centerpiece of your living space!",
      finish: "Distressed",
      furnitureName: "Sofa",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20220816224636_7abe8.thumb.1000_0.png",
      material: "Metal",
      price: "300",
      sellerAddress: "9101 Oak Drive, Lakeside, TX 34567",
      sellerName: "David Wilson",
      sellerPhoneNumber: "345-678-9012",
    },
    {
      brand: "Bernhardt Furniture",
      condition: "Used - Like new",
      decorStyle: "Scandinavian",
      deliveryMethod: "Local pickup",
      description:
        "Unleash your creativity with this gently used artist's table. Designed for the passionate at heart, its spacious surface and ergonomic design ensure endless hours of inspired work. Its sturdy build and adjustable features cater to every artist's need. Previously cherished, it's ready for a new chapter in another creator's journey. Dive into your masterpieces without breaking the bank. This table isn't just a tool, it's the bridge between your imagination and reality. Act now, and let your artistry flourish!",
      finish: "Distressed",
      furnitureName: "Desk",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20150423221602_GTXhs.thumb.1000_0.jpeg",
      material: "Leather",
      price: "100",
      sellerAddress: "1121 Pine Avenue, Mountainview, CO 78901",
      sellerName: "Sarah Martinez",
      sellerPhoneNumber: "456-789-0123",
    },
    {
      brand: "Ethan Allen",
      condition: "New",
      decorStyle: "Bohemian (Boho)",
      deliveryMethod: "All",
      description:
        "Introducing a timeless piece: this pre-loved wardrobe. Exuding elegance and functionality, it offers spacious storage with a touch of vintage charm. Expertly crafted, its solid structure stands testament to its quality. Whether you're upgrading or just starting out, this wardrobe promises organization with style. Its detailed finishes elevate any room, making it more than just storage – it's a statement. Secure this classic gem at a steal, and let your fashion find its deserving home!",
      finish: "Mirrored",
      furnitureName: "Wardrobe",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20110712121432_MRQVz.jpg",
      material: "Leather",
      price: "350",
      sellerAddress: "2345 Birch Boulevard, Seaside, FL 23456",
      sellerName: "James Turner",
      sellerPhoneNumber: "567-890-1234",
    },
    {
      brand: "Restoration Hardware",
      condition: "Used",
      decorStyle: "Farmhouse",
      deliveryMethod: "Shipping",
      description:
        "Presenting a bibliophile's dream: this exquisite second-hand bookcase. Perfectly maintained, its shelves whisper tales of past literary journeys. Crafted with attention to detail, its sturdy frame promises years of cherished use. Elevate your reading nook or office with its classic design, seamlessly blending storage and aesthetics. It's more than a mere shelf; it's a sanctuary for your treasured collection. Dive into organized elegance without the extravagant cost. Secure this timeless piece now, and let your stories find their rightful place!",
      finish: "Mirrored",
      furnitureName: "Bookshelf",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20190720174326_vwdxk.jpg",
      material: "Leather",
      price: "125",
      sellerAddress: "6789 Cedar Court, Plainsville, NY 89012",
      sellerName: "Jessica Smith",
      sellerPhoneNumber: "678-901-2345",
    },
    {
      brand: "Serena & Lily",
      condition: "Used - Good",
      decorStyle: "Shabby Chic",
      deliveryMethod: "All",
      description:
        "Behold a blend of luxury and comfort with this meticulously maintained second-hand sofa. Radiating timeless charm, its plush cushions and elegant design beckon for cozy moments. Barely distinguishable from brand new, it promises the essence of style without the premium price. Perfect for those who value both quality and savings. This isn't just seating—it's a statement piece, awaiting its next cherished home. Capture this rare find now and elevate your living experience!",
      finish: "Painted",
      furnitureName: "Couch",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20220816224449_db7b4.thumb.1000_0.png",
      material: "Fabric",
      price: "250",
      sellerAddress: "3450 Spruce Way, Valleytown, WA 45678",
      sellerName: "William Anderson",
      sellerPhoneNumber: "789-012-3456",
    },
    {
      brand: "Z Gallerie",
      condition: "Used - Good",
      decorStyle: "Art Deco",
      deliveryMethod: "Shipping",
      description:
        "Introducing a culinary enthusiast's delight: this pristine second-hand kitchenware set. Expertly crafted and gently used, every piece promises to elevate your cooking adventures. From its sleek design to its flawless functionality, it's a testament to quality without the high-end price tag. Perfect for both seasoned chefs and beginners alike. Dive into a world of gourmet creations with tools that feel brand new. Seize this unmatched opportunity to upgrade your kitchen essentials without breaking the bank!",
      finish: "Painted",
      furnitureName: "Dining Set",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20170805160639_Qv3sU.thumb.1000_0.jpeg",
      material: "Fabric",
      price: "300",
      sellerAddress: "9012 Redwood Road, Hillside, AZ 12345",
      sellerName: "Amanda White",
      sellerPhoneNumber: "890-123-4567",
    },
    {
      brand: "Z Gallerie",
      condition: "Used - Good",
      decorStyle: "Coastal/Hamptons",
      deliveryMethod: "Local pickup",
      description:
        "Discover elegance and utility in this second-hand storage cabinet. A true blend of form and function, its spacious compartments cater to diverse storage needs. Boasting a timeless design and impeccable condition, it seamlessly integrates into any decor. A rare find, it offers the luxury of organization without the steep price tag. Whether for home or office, this cabinet promises not just space, but a touch of sophistication. Don't miss this chance to declutter with style. Claim this gem now, and transform your space",
      finish: "Stained",
      furnitureName: "Cabinet",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20141223224439_vdhKR.jpeg",
      material: "Fabric",
      price: "180",
      sellerAddress: "5670 Fir Place, Creekville, MI 67890",
      sellerName: "Christopher Taylor",
      sellerPhoneNumber: "901-234-5678",
    },
    {
      brand: "Z Gallerie",
      condition: "Used - Fair",
      decorStyle: "Traditiona",
      deliveryMethod: "All",
      description:
        "Experience unparalleled comfort with this beautifully maintained second-hand bed. Designed for restful nights, its sturdy frame and impeccable mattress attest to its premium quality. Capturing timeless elegance, this bed seamlessly elevates any bedroom ambiance. A haven for dreams, without the lavish price tag. Perfect for those who cherish both style and value. Transform your nights and wake up rejuvenated. Seize this limited opportunity to own luxury for less",
      finish: "Stained",
      furnitureName: "Bed",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20200522214106_szohf.jpg",
      material: "Fabric",
      price: "400",
      sellerAddress: "2341 Juniper Trail, Ridgecity, GA 34512",
      sellerName: "Laura Brown",
      sellerPhoneNumber: "012-345-6789",
    },
    {
      brand: "Serena & Lily",
      condition: "Used - Good",
      decorStyle: "Shabby Chic",
      deliveryMethod: "All",
      description:
        "Upgrade your bedroom with this stylish and sturdy bed frame. Crafted with care, this bed frame combines both form and function. Its timeless design complements a variety of decor styles, from modern to traditional. The durable construction ensures that you'll enjoy countless nights of restful sleep.",
      finish: "Painted",
      furnitureName: "Bedframe",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20121023033723_PvsVr.jpeg",
      material: "Fabric",
      price: "120",
      sellerAddress: "9287 Pierce Ave. Houston, TX 77018",
      sellerName: "Emily Johnson",
      sellerPhoneNumber: "219-891-6658",
    },
    {
      brand: "Serena & Lily",
      condition: "Used - Good",
      decorStyle: "Shabby Chic",
      deliveryMethod: "All",
      description:
        "Elevate your bedroom decor with this charming used nightstand. This elegant piece not only adds functionality to your bedside but also enhances the overall aesthetic of your room. Crafted with attention to detail, it features a timeless design that blends seamlessly with any bedroom style.",
      finish: "Painted",
      furnitureName: "Nightstand",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20170829195503_TdGwc.thumb.400_0.jpeg",
      material: "Fabric",
      price: "60",
      sellerAddress: "79 Winding Way Drive Palm Coast, FL 32137",
      sellerName: "Michael Patel",
      sellerPhoneNumber: "742-444-1469",
    },
    {
      brand: "Serena & Lily",
      condition: "Used - Good",
      decorStyle: "Shabby Chic",
      deliveryMethod: "All",
      description:
        "Upgrade your living space with this cozy and stylish used armchair. This inviting piece combines comfort and elegance, making it a perfect addition to your home. With its timeless design and neutral color, it seamlessly complements various decor styles, from classic to contemporary.",
      finish: "Painted",
      furnitureName: "Armchair",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20200319221948_lfcff.jpeg",
      material: "Fabric",
      price: "200",
      sellerAddress: "385 Creek Ave. Old Bridge, NJ 08857",
      sellerName: "Sophia Rodriguez",
      sellerPhoneNumber: "706-266-0589",
    },
    {
      brand: "Serena & Lily",
      condition: "Used - Good",
      decorStyle: "Shabby Chic",
      deliveryMethod: "All",
      description:
        "Indulge in ultimate relaxation with this gently used recliner chair. Crafted for both comfort and style, it's the perfect addition to your home. Its sleek and modern design effortlessly blends with any decor, making it a versatile choice for your living space.",
      finish: "Painted",
      furnitureName: "Recliner",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20180615231353_ywlhq.jpg",
      material: "Fabric",
      price: "200",
      sellerAddress: "9183 Cedar Swamp Lane Phoenixville, PA 19460",
      sellerName: "Liam Williams",
      sellerPhoneNumber: "623-832-4435",
    },
    {
      brand: "Serena & Lily",
      condition: "Used - Good",
      decorStyle: "Shabby Chic",
      deliveryMethod: "All",
      description:
        "Enhance your relaxation experience with this gently used ottoman. It's the ideal addition to your living room, providing both comfort and versatility. With its classic design, this ottoman effortlessly complements various decor styles.",
      finish: "Painted",
      furnitureName: "Ottoman",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20161202202321_AZkev.thumb.400_0.jpeg",
      material: "Fabric",
      price: "50",
      sellerAddress: "305 Railroad Street Colonial Heights, VA 23834",
      sellerName: "Olivia Lee",
      sellerPhoneNumber: "464-314-4576",
    },
    {
      brand: "Serena & Lily",
      condition: "Used - Good",
      decorStyle: "Shabby Chic",
      deliveryMethod: "All",
      description:
        "Elevate your bedroom with this gently used vanity table. This elegant piece not only adds functionality to your morning routine but also enhances the overall aesthetics of your space. Crafted with care, it features a timeless design that effortlessly complements various decor styles.",
      finish: "Painted",
      furnitureName: "Dresser",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20171219143030_3LBjZ.jpeg",
      material: "Fabric",
      price: "160",
      sellerAddress: "506 Ashley Ave. Woburn, MA 01801",
      sellerName: "Ethan Davis",
      sellerPhoneNumber: "964-675-1629",
    },
    {
      brand: "Serena & Lily",
      condition: "Used - Good",
      decorStyle: "Shabby Chic",
      deliveryMethod: "All",
      description:
        "Elevate your living space with this gently used coffee table. This stylish and functional piece is the perfect addition to your home. Its timeless design effortlessly complements various decor styles, from contemporary to traditional.",
      finish: "Painted",
      furnitureName: "Coffee Table",
      imageLink:
        "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20140720113728_hvKY4.jpeg",
      material: "Fabric",
      price: "180",
      sellerAddress: "843 West Washington Avenue Passaic, NJ 07055",
      sellerName: "Ava Martinez",
      sellerPhoneNumber: "370-398-4773",
    },
  ],
};

describe("Route with no filter", () => {
  it("When no filter is selected, clicking the first item should goes to route with id of 0.", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <BrowserRouter>
        <FurnitureContent data={itemMock} />
      </BrowserRouter>
    );

    const cardActionArea = screen.getByLabelText("Table");

    fireEvent(cardActionArea, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    expect(window.location.pathname).toBe('/FurnitureDescription/0/detail');
  });

  it("the route item will be the correct id if selected the right filter", async () => {
    const { container } = render(
      <BrowserRouter>
        <FurnitureContent data={itemMock} />
      </BrowserRouter>
    );
    

    const deliv = screen.getByLabelText("delivery");
    // const deliever = container.querySelector("panel1a-header");
    expect(deliv);

    fireEvent(deliv, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    const delivButton = screen.getByLabelText("Shipping");
    fireEvent(delivButton, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    expect(screen.queryByLabelText("Table") == null);
    // expect(wrongCardActionArea).toBeNull();

    const cardActionArea = screen.getByLabelText("Chair");
    expect(cardActionArea);
    fireEvent(cardActionArea, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    expect(window.location.pathname).toBe('/FurnitureDescription/1/detail');
    
  });
});
