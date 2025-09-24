import React, { useState, useMemo, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid, Card, Fade } from '@mui/material';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import DetailCard from './DetailCard';

// --- Global, Reusable Chart Component ---
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartSection({ data, title, description, tables = [] }) {
    const theme = useTheme();
    const reversedData = useMemo(() => [...data].reverse(), [data]);
    const [selectedItem, setSelectedItem] = useState(reversedData[0]);
    const chartRef = useRef();

    const chartData = useMemo(() => ({
        labels: reversedData.map(item => item.name),
        datasets: [{
            label: 'Score',
            data: reversedData.map(item => item.score),
            backgroundColor: theme.palette.secondary.main,
            borderColor: theme.palette.primary.main,
            borderWidth: 1,
            hoverBackgroundColor: theme.palette.secondary.light,
        }],
    }), [reversedData, theme]);

    const chartOptions = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            title: { display: false },
            tooltip: { callbacks: { label: (context) => `${context.label}: ${context.parsed.x}` } }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 10,
                // --- MODIFICATION: Set tick colors from the theme ---
                ticks: {
                    color: theme.palette.text.secondary,
                },
                grid: {
                    color: theme.palette.divider,
                },
            },
            y: {
                ticks: {
                    autoSkip: false,
                    // --- MODIFICATION: Set tick colors from the theme ---
                    color: theme.palette.text.primary,
                },
                grid: {
                    display: false,
                },
            }
        }
    // --- MODIFICATION: Add theme to the dependency array ---
    }), [theme]);

    const onClick = (event) => {
        if (!chartRef.current) return;
        const element = getElementAtEvent(chartRef.current, event);
        if (element.length > 0) {
            const { index } = element[0];
            setSelectedItem(reversedData[index]);
        }
    };

    return (
        <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom>{title}</Typography>
                <Typography>{description}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{
                    display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                    gap: 4, height: { xs: 'auto', md: '500px' }, alignItems: 'stretch'
                }}>
                    <Card sx={{
                        flexGrow: 1, flexShrink: 0, minHeight: { xs: '350px', md: 'auto' },
                        p: 2,
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Bar ref={chartRef} options={chartOptions} data={chartData} onClick={onClick} />
                    </Card>
                    <Box sx={{
                        flexBasis: { xs: 'auto', md: '45%' }, flexGrow: 1,
                        minHeight: { xs: '300px', md: 'auto' }, display: 'flex'
                    }}>
                        <Fade in={!!selectedItem} key={selectedItem?.name || 'empty'}>
                           {selectedItem ? <DetailCard content={selectedItem.details} /> : <Box />}
                        </Fade>
                    </Box>
                </Box>
            </Grid>
            {tables.map((table, index) => (
                <Grid item xs={12} key={index}>{table}</Grid>
            ))}
        </Grid>
    );
};