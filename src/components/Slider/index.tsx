import { useRef } from 'react';
import './styles.scss'

export const Slider = () =>  {
	const leftRef = useRef(null as any);

	function handleMove(event: any) {
		leftRef.current.style.width = `${Math.max(event.clientX / (window.innerWidth)) * 100}%`;
	}

	return (
    <div className='container'>
			<div className="sliderContainer" onPointerMove={handleMove}>
				<div id="left" className="side" ref={leftRef}>
					<div>
						<p>
							Sometimes
						</p>
						<p>Programming is</p>
						<strong>HARD</strong>
					</div>
				</div>

				<div id="right" className="side">
					<div>
						<p>
							Sometimes
						</p>
						<p>Programming is</p>
						<strong>EASY</strong>
					</div>
				</div>
			</div>
    </div>
			
	);
}

