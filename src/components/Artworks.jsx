import { useEffect, useState } from 'react';
import ethlogo from '../assets/ethlogo.png';
import nftImage1 from '../assets/nft1.png';
import nftImage2 from '../assets/nft2.png';
import nftImage3 from '../assets/nft3.png';
import nftImage4 from '../assets/nft4.png';

const staticArtworks = [
  {
    id: 1,
    imageURL: nftImage1,
    url: '#',
    cost: '0.5 ETH',
  },
  {
    id: 2,
    imageURL: nftImage2,
    url: '#',
    cost: '0.75 ETH',
  },
  {
    id: 3,
    imageURL: nftImage3,
    url: '#',
    cost: '1.2 ETH',
  },
  {
    id: 4,
    imageURL: nftImage4,
    url: '#',
    cost: '2.0 ETH',
  },
];

const Artworks = ({ artworks = [] }) => {
  const [end, setEnd] = useState(4);
  const [count] = useState(4);
  const [nfts, setNfts] = useState([]);

  const getNfts = () => {
    const source = artworks.length > 0 ? artworks : staticArtworks;
    return source.slice(0, end);
  };

  useEffect(() => {
    setNfts(getNfts());
  }, [artworks, end]);

  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {nfts.map((nft, i) => (
            <a
              key={i}
              href={nft.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{ backgroundImage: `url(${nft.imageURL})` }}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`Rohan NFT #${nft.id}`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`Adulam NFT collection #${nft.id}`}
                  />
                  {nft.cost}
                </div>
              </div>
            </a>
          ))}
        </div>

        {staticArtworks.length > nfts.length && (
          <div className="flex flex-row justify-center items-center mx-auto mt-4">
            <button
              className="shadow-xl shadow-black text-white
              bg-[#e32970] hover:bg-[#bd255f] p-2
              rounded-full cursor-pointer my-4"
              onClick={() => setEnd(end + count)}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artworks;
