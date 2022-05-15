import React from 'react';
import CreationsBanner from './CreationsBanner';
import DeepEarth from '../images/mobile/image-deep-earth.jpg';
import DeepEarthDesktop from '../images/desktop/image-deep-earth.jpg';
import NinghtArcade from '../images/mobile/image-night-arcade.jpg';
import NinghtArcadeDesktop from '../images/desktop/image-night-arcade.jpg';
import SoccerTeam from '../images/mobile/image-soccer-team.jpg';
import SoccerTeamDesktop from '../images/desktop/image-soccer-team.jpg';
import TheGrid from '../images/mobile/image-grid.jpg';
import TheGridDesktop from '../images/desktop/image-grid.jpg';
import FromAbove from '../images/mobile/image-from-above.jpg';
import FromAboveDesktop from '../images/desktop/image-from-above.jpg';
import PocketBorealis from '../images/mobile/image-pocket-borealis.jpg';
import PocketBorealisDesktop from '../images/desktop/image-pocket-borealis.jpg';
import Curiosity from '../images/mobile/image-curiosity.jpg';
import CuriosityDesktop from '../images/desktop/image-curiosity.jpg';
import FishEye from '../images/mobile/image-fisheye.jpg';
import FishEyeDesktop from '../images/desktop/image-fisheye.jpg';

function Creations() {
  return (
    <div className="lg:px-40">
      <div className="flex justify-between items-center lg:py-16 lg:w-full">
        <h2
          className="px-4 lg:px-0 pb-16 lg:pb-0 w-full lg:w-1/2 lg:text-left
          text-center uppercase text-4xl font-light leading-none"
        >
          Our creations
        </h2>
        <div className="hidden lg:block">
          <button className="hover:bg-blackClr hover:text-whiteClr transition-all duration-200 ease-in-out uppercase tracking-[0.4rem] font-semibold text-blackClr text-xl border-2 border-blackClr py-2 px-8">
            See All
          </button>
        </div>
      </div>
      <section className="grid lg:pb-32 lg:grid-cols-4 gap-6 lg:px-0 px-8">
        <CreationsBanner
          title={'Deep earth'}
          imgSrc={DeepEarth}
          imgDesktop={DeepEarthDesktop}
        />
        <CreationsBanner
          title={'Night arcade'}
          imgSrc={NinghtArcade}
          imgDesktop={NinghtArcadeDesktop}
        />
        <CreationsBanner
          title={'Soccer team VR'}
          imgSrc={SoccerTeam}
          imgDesktop={SoccerTeamDesktop}
        />
        <CreationsBanner
          title={'The grid'}
          imgSrc={TheGrid}
          imgDesktop={TheGridDesktop}
        />
        <CreationsBanner
          title={'From up above VR '}
          imgSrc={FromAbove}
          imgDesktop={FromAboveDesktop}
        />
        <CreationsBanner
          title={'Pocket borealis'}
          imgSrc={PocketBorealis}
          imgDesktop={PocketBorealisDesktop}
        />
        <CreationsBanner
          title={'The curiosity'}
          imgSrc={Curiosity}
          imgDesktop={CuriosityDesktop}
        />
        <CreationsBanner
          title={'Make it fisheye'}
          imgSrc={FishEye}
          imgDesktop={FishEyeDesktop}
        />
      </section>
      <div className="w-full mx-auto lg:hidden text-center py-10">
        <button className="hover:bg-blackClr hover:text-whiteClr transition-all duration-200 ease-in-out uppercase tracking-[0.4rem] font-semibold text-blackClr text-xl border-2 border-blackClr py-2 px-8">
          See All
        </button>
      </div>
    </div>
  );
}

export default Creations;
