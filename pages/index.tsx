import React from 'react';
import Link from 'next/link';
import AnimatedLogo from "@utils/logo/logo";

class Index extends React.Component {
  render() {    
    return (
      <Link href="/detalles1">
        <div>
          <AnimatedLogo></AnimatedLogo>
        </div>
      </Link>
    )
  }
}

export default Index;