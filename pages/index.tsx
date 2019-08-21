import React from 'react';
import Link from 'next/link';
import AnimatedLogo from "@utils/logo/logo";


export default class extends React.Component {
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