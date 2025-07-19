import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const CarbonEmissionBreakdown = ({ email }) => {
  const isZeroEmission = email === 'temethon1@gmail.com';

  const sources = [
    {
      name: 'Household',
      emissions: isZeroEmission ? '0.0 MT' : '2.5 MT',
      gradientStart: '#38b2ac',
      gradientEnd: '#2f855a',
      icon: <HomeIcon fontSize="large" />,
    },
    {
      name: 'AC',
      emissions: isZeroEmission ? '0.0 MT' : '1.2 MT',
      gradientStart: '#68d391',
      gradientEnd: '#48bb78',
      icon: <AcUnitIcon fontSize="large" />,
    },
    {
      name: 'Vehicles',
      emissions: isZeroEmission ? '0.0 MT' : '3.8 MT',
      gradientStart: '#48bb78',
      gradientEnd: '#38a169',
      icon: <DirectionsCarIcon fontSize="large" />,
    },
  ];

  return (
    <div>
      <Typography
        variant="h5"
        className="text-white font-bold text-center mb-6 text-2xl"
      >
        Carbon Emission Breakdown
      </Typography>
      <Grid container spacing={4}>
        {sources.map((source, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                background: `linear-gradient(to right, ${source.gradientStart}, ${source.gradientEnd})`,
              }}
              className="rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-1">
                  <div className="text-white">{source.icon}</div>
                  <Typography variant="h5" className="text-white">
                    {source.name}
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="text-white mt-2">
                  Emissions:
                </Typography>
                <Typography
                  variant="h4"
                  className={`font-bold text-white mt-1 uppercase tracking-wider ${
                    parseFloat(source.emissions) > 3 ? 'text-red-500' : ''
                  }`}
                >
                  {source.emissions}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CarbonEmissionBreakdown;
