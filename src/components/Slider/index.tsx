import { useRef } from 'react';
import './styles.scss'

export const Slider = () =>  {
	const leftRef = useRef(null as any);
	const rightRef = useRef(null as any);
	const containerRef = useRef(null as any);

	function handleMove(event: any) {
		console.dir(containerRef.current)
		leftRef.current.style.width = `${Math.max(event.clientX / (containerRef.current.clientWidth + containerRef.current.offsetLeft)) * 100}%`;
	}

	return (
    <div className='container'>
      <div className="sliderContainer" ref={containerRef} onPointerMove={handleMove}>
				<div id="left" className="side" ref={leftRef}>
					<img
						src="https://images.unsplash.com/photo-1604846887565-640d2f52d564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
						alt=""
					/>
				</div>

				<div id="right" className="side" ref={rightRef}>
					<img
						src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						alt=""
					/>
				</div>
			</div>
    </div>
			
	);
}

