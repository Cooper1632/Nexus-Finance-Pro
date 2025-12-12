import React from 'react';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  ArcElement, 
  Tooltip, 
  Legend, 
  PointElement, 
  LineElement, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  Title
} from 'chart.js';
import { PolarArea, Bubble, Bar, Line } from 'react-chartjs-2';
import { BeakerIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next'; // IMPORT

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale, BarElement, Title);

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '25px',
        marginTop: '20px'
    },
    card: {
        backgroundColor: 'var(--card-background)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: 'var(--secondary-color)',
        display: 'flex', alignItems: 'center', gap: '8px'
    }
};

export default function Sandbox({ setActiveMode }) {
    const { t } = useTranslation(); // HOOK

    // DONNÉES FICTIVES (Labels traduits)
    const polarData = {
        labels: ['Liquidités', 'Actions Tech', 'Immobilier', 'Obligations', 'Crypto', 'Or'],
        datasets: [{
            label: t('sandbox.label_risk_score'),
            data: [2, 9, 5, 3, 10, 4],
            backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 205, 86, 0.5)', 'rgba(201, 203, 207, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 159, 64, 0.5)'],
            borderWidth: 1
        }]
    };

    const bubbleData = {
        datasets: [{
            label: t('sandbox.label_portfolio_analysis'),
            data: [{ x: 10, y: 5, r: 20 }, { x: 40, y: 15, r: 10 }, { x: 25, y: 10, r: 30 }, { x: 80, y: 60, r: 5 }, { x: 5, y: 2, r: 15 }],
            backgroundColor: 'rgba(142, 68, 173, 0.5)',
            borderColor: 'rgba(142, 68, 173, 1)',
        }]
    };

    const horizontalBarData = {
        labels: ['Loyer', 'Alim.', 'Transp.', 'Loisirs', 'Santé', 'Dettes'],
        datasets: [{
            label: t('sandbox.label_monthly_expenses'),
            data: [1200, 600, 400, 300, 150, 200],
            backgroundColor: 'rgba(52, 190, 128, 0.6)',
            borderRadius: 5
        }]
    };

    const mixedData = {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [
            { type: 'line', label: t('sandbox.label_budget_goal'), borderColor: '#E74C3C', borderWidth: 2, borderDash: [5, 5], fill: false, data: [3000, 3000, 3000, 3000, 3000, 3000], tension: 0 },
            { type: 'bar', label: t('sandbox.label_real_expenses'), backgroundColor: 'rgba(52, 152, 219, 0.6)', data: [2800, 3100, 2900, 3200, 2500, 3050], borderRadius: 4 }
        ]
    };
    
    return (
        <div className="printable-content" style={{display:'block'}}>
            <div className="module-header-with-reset">
                <h2 style={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <BeakerIcon style={{width:'32px', color:'var(--perf-color)'}}/> 
                    {t('sandbox.title')}
                </h2>
                <button onClick={() => setActiveMode('dashboard')} style={{background:'none', border:'none', cursor:'pointer', color:'var(--text-color)'}}>
                    <XMarkIcon style={{width:'24px'}}/>
                </button>
            </div>

            <div style={{backgroundColor:'#FEF9E7', padding:'15px', borderRadius:'8px', border:'1px solid #F1C40F', marginBottom:'20px', color:'#7F6000'}}>
                <strong>🧪 {t('sandbox.warning_mode')}</strong>
            </div>

            <div style={styles.grid}>
                <div style={styles.card}>
                    <div style={styles.title}>1. {t('sandbox.chart_polar')}</div>
                    <p style={{fontSize:'0.85rem', color:'#666', marginBottom:'10px'}}>{t('sandbox.desc_polar')}</p>
                    <div style={{width:'100%', height:'300px', display:'flex', justifyContent:'center'}}><PolarArea data={polarData} options={{responsive:true, maintainAspectRatio:false}} /></div>
                </div>

                <div style={styles.card}>
                    <div style={styles.title}>2. {t('sandbox.chart_bubble')}</div>
                    <p style={{fontSize:'0.85rem', color:'#666', marginBottom:'10px'}}>{t('sandbox.desc_bubble')}</p>
                    <div style={{width:'100%', height:'300px'}}><Bubble data={bubbleData} options={{responsive:true, maintainAspectRatio:false, scales:{y:{beginAtZero:true}, x:{beginAtZero:true}}}} /></div>
                </div>

                <div style={styles.card}>
                    <div style={styles.title}>3. {t('sandbox.chart_horizontal')}</div>
                    <p style={{fontSize:'0.85rem', color:'#666', marginBottom:'10px'}}>{t('sandbox.desc_horizontal')}</p>
                    <div style={{width:'100%', height:'300px'}}><Bar data={horizontalBarData} options={{indexAxis: 'y', responsive:true, maintainAspectRatio:false}} /></div>
                </div>

                <div style={styles.card}>
                    <div style={styles.title}>4. {t('sandbox.chart_mixed')}</div>
                    <p style={{fontSize:'0.85rem', color:'#666', marginBottom:'10px'}}>{t('sandbox.desc_mixed')}</p>
                    <div style={{width:'100%', height:'300px'}}><Bar data={mixedData} options={{responsive:true, maintainAspectRatio:false}} /></div>
                </div>
            </div>
        </div>
    );
}