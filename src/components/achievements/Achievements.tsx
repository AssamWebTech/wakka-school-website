import { Achievement } from '../../models/types';
import { achievements } from '../../static/achievements';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="achievement-grid">
        {
            achievements.map((item: Achievement) => {
                return (
                    <div className="achievement-card animated-card" key={item.id}>
                        <img
                            src={item.image}
                            className="achievement-image"
                        />
                        <div className="achievement-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Achievements;
