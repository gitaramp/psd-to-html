import React, { Component } from 'react';
import DirectionReveal from 'direction-reveal'
const directionRevealDemo = DirectionReveal();
const directionRevealSwing = DirectionReveal({
  selector: '.direction-reveal',
  itemSelector: '.direction-reveal__card',
  animationName: 'slide',
  enableTouch: true,
  touchThreshold: 250
});

    
class Portfolio extends Component {
      constructor(props) {
          super(props);
          this.state = {showModal: false, picNumber: null};
          this.handleClick = this.handleClick.bind(this);
          this.project = {
            name: [
              'Java', 
              'Javascript', 
              'PHP', 
              'SQL', 
              'Scala', 
              'Python', 
              'Swift', 
              'Assembler'
            ],
            text: [
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quibusdam distinctio consequuntur illum sint voluptas voluptate modi perspiciatis aperiam a asperiores, soluta libero veniam, eum cupiditate.', 
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quibusdam distinctio consequuntur illum sint voluptas voluptate modi perspiciatis aperiam a asperiores, soluta libero veniam, eum cupiditate.', 
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quibusdam distinctio consequuntur illum sint voluptas voluptate modi perspiciatis aperiam a asperiores, soluta libero veniam, eum cupiditate.', 
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quibusdam distinctio consequuntur illum sint voluptas voluptate modi perspiciatis aperiam a asperiores, soluta libero veniam, eum cupiditate.', 
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quibusdam distinctio consequuntur illum sint voluptas voluptate modi perspiciatis aperiam a asperiores, soluta libero veniam, eum cupiditate.', 
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quibusdam distinctio consequuntur illum sint voluptas voluptate modi perspiciatis aperiam a asperiores, soluta libero veniam, eum cupiditate.', 
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quibusdam distinctio consequuntur illum sint voluptas voluptate modi perspiciatis aperiam a asperiores, soluta libero veniam, eum cupiditate.', 
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quibusdam distinctio consequuntur illum sint voluptas voluptate modi perspiciatis aperiam a asperiores, soluta libero veniam, eum cupiditate.'
            ]
          };
      }
    
      handleClick(pic) {
        this.setState(prevState => ({
          showModal: !prevState.showModal,
          picNumber: pic,
        }));
      }
      
      render() {
        const port = (
          <div className="port container item_open column-is-6">
            <a onClick={this.handleClick} className="close"></a>
            <div className="row">
              <div className="description">
                <h1>{this.project.name[this.state.picNumber]}</h1>
                <p>{this.project.text[this.state.picNumber]}</p>
              </div>
              <img class="image is-4by3" src={`https://unsplash.it/350/250/?random&pic=${this.state.picNumber + 1}`} alt="" />
            </div>
          </div>
        );
        
        return (
           <div id="portfolio-tab">
             <section className="portfolio-section columns is-multiline centered">
               <h2 className="column is-full">Portfolio</h2>
          
               <div className="column is-full-mobile gallery">
                 <ul id="gallery">
                 <div className="direction-reveal">
                   <div className="columns">
                     <li className="column card">
                       <a onClick={() => this.handleClick(0)} className="direction-reveal__card card-image">
                         <img src="https://unsplash.it/350/250/?random&pic=1" className="direction-reveal__image" alt="" />
                         <div className="direction-reveal__overlay direction-reveal__anim--in">
                           <h3 className="direction-reveal__title">Lorem Ipsum</h3>
                         </div>
                       </a>
                     </li>
                     <li className="column card">
                       <a onClick={() => this.handleClick(1)} className="direction-reveal__card card-image">
                         <img src="https://unsplash.it/350/250/?random&pic=2" className="direction-reveal__image" alt="" />
                         <div className="direction-reveal__overlay direction-reveal__anim--in">
                           <h3 className="direction-reveal__title">Lorem Ipsum</h3>
                         </div>
                       </a>
                     </li>
                     <li className="column card">
                       <a onClick={() => this.handleClick(2)} className="direction-reveal__card card-image">
                         <img src="https://unsplash.it/350/250/?random&pic=3" className="direction-reveal__image" alt="" />
                         <div className="direction-reveal__overlay direction-reveal__anim--in">
                           <h3 className="direction-reveal__title">Lorem Ipsum</h3>
                         </div>
                       </a>
                     </li>
                     <li className="column card">
                       <a onClick={() => this.handleClick(3)} className="direction-reveal__card card-image">
                         <img src="https://unsplash.it/350/250/?random&pic=4" className="direction-reveal__image" alt="" />
                         <div className="direction-reveal__overlay direction-reveal__anim--in">
                           <h3 className="direction-reveal__title">Lorem Ipsum</h3>
                         </div>
                       </a>
                     </li>
                   </div>
                   <div className="columns">
                     <li className="column card">
                       <a onClick={() => this.handleClick(4)} className="direction-reveal__card card-image">
                         <img src="https://unsplash.it/350/250/?random&pic=5" className="direction-reveal__image" alt="" />
                         <div className="direction-reveal__overlay direction-reveal__anim--in">
                           <h3 className="direction-reveal__title">Lorem Ipsum</h3>
                         </div>
                       </a>
                     </li>
                     <li className="column card">
                       <a onClick={() => this.handleClick(5)} className="direction-reveal__card card-image">
                         <img src="https://unsplash.it/350/250/?random&pic=6" className="direction-reveal__image" alt="" />
                         <div className="direction-reveal__overlay direction-reveal__anim--in">
                           <h3 className="direction-reveal__title">Lorem Ipsum</h3>
                         </div>
                       </a>
                     </li>
                     <li className="column card">
                       <a onClick={() => this.handleClick(6)} className="direction-reveal__card card-image">
                         <img src="https://unsplash.it/350/250/?random&pic=7" className="direction-reveal__image" alt="" />
                         <div className="direction-reveal__overlay direction-reveal__anim--in">
                           <h3 className="direction-reveal__title">Lorem Ipsum</h3>
                         </div>
                       </a>
                     </li>
                     <li className="column card">
                       <a onClick={() => this.handleClick(7)} className="direction-reveal__card card-image">
                         <img src="https://unsplash.it/350/250/?random&pic=8" className="direction-reveal__image" alt="" />
                         <div className="direction-reveal__overlay direction-reveal__anim--in">
                           <h3 className="direction-reveal__title">Lorem Ipsum</h3>
                         </div>
                       </a>
                     </li>
                   </div>
                 </div>
                 </ul>
               </div>
               {this.state.showModal ? port : ''} 
          
             </section>
           </div>

        );
      }
    }

export default Portfolio;
