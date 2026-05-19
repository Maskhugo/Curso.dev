import { useState } from 'react';

function Home() {
    // Estado para controlar a posição do botão "Não"
    const [naoStyle, setNaoStyle] = useState({});

    function aceitou() {
        alert("EBA! Já vai preparando o estômago pra devorar um Yakiniku! 🤠🔥");
    }

    function fuga() {
        // Gera uma posição aleatória em porcentagem para funcionar bem em qualquer tela
        const x = Math.floor(Math.random() * 70) + 10; // entre 10% e 80%
        const y = Math.floor(Math.random() * 70) + 10;

        setNaoStyle({
            position: 'fixed',
            left: `${x}%`,
            top: `${y}%`,
            zIndex: 999
        });
    }

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#fff8f0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            margin: 0,
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            <h1 style={{ color: '#d32f2f', fontSize: '2.2rem', marginBottom: '20px', padding: '0 20px' }}>
                A gatinha aceita ir no Sukiya quando eu voltar de viagem??? 🍛✈️
            </h1>
            
            <div style={{ marginBottom: '30px' }}>
                {/* GIF do gatinho comendo na velocidade da luz */}
                <img 
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzR2YnNqN2lsYTY2MnJpZGV1MmY0MXM4d3JyaW4xY3hodGkycjA5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/In0Lpu4FVivjISX9HT/giphy.gif" 
                    alt="Gatinho comendo animado"
                    style={{ maxWidth: '280px', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
                />
            </div>

            <div style={{ display: 'flex', gap: '50px', position: 'relative', width: '300px', justifyContent: 'center', height: '60px', alignItems: 'center' }}>
                <button 
                    onClick={aceitou}
                    style={{
                        padding: '12px 28px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        backgroundColor: '#4caf50',
                        color: 'white'
                    }}
                >
                    Sim!
                </button>
                
                <button 
                    onMouseOver={fuga}
                    onClick={fuga}
                    style={{
                        padding: '12px 28px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        backgroundColor: '#f44336',
                        color: 'white',
                        transition: 'all 0.2s ease',
                        ...naoStyle // Aplica o estilo de fuga aqui
                    }}
                >
                    Não
                </button>
            </div>
        </div>
    );
}

export default Home;