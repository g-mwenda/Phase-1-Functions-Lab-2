// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks < 0) {
      return "Distance cannot be negative.";
    } else if (blocks <= 42) {
      return 42 - blocks;
    } else {
      return blocks - 42;
    }
  }


  function distanceFromHqInFeet(blocks) {
    const feetInBlock = 264;
    return distanceFromHqInBlocks(blocks) * feetInBlock;
  }

  
  function distanceTravelledInFeet (start, destination) {
    const feetInBlock = 264 ;
    if (destination>start){
    return (destination - start) * feetInBlock;}
    else if (start>destination) {return (start-destination) * feetInBlock;
    }
    }

    
   
   
   
    function distanceTravelledInFeet(startBlock, endBlock) {
      const feetInBlock = 264;
      const distance = Math.abs(startBlock - endBlock) * feetInBlock;
      return distance;
    }
    
    function calculatesFarePrice(startBlock, endBlock) {
      const distance = distanceTravelledInFeet(startBlock, endBlock);
    
      if (distance <= 400) {
        return 0;
      } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
      } else if (distance > 2000 && distance <= 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }
    }