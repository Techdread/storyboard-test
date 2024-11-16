import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
} from '@mui/material';

// Shape components
const Cube = ({ size, color, position, rotation }) => (
  <mesh position={position} rotation={rotation}>
    <boxGeometry args={[size, size, size]} />
    <meshStandardMaterial color={color} />
  </mesh>
);

const Sphere = ({ radius, color, position, rotation }) => (
  <mesh position={position} rotation={rotation}>
    <sphereGeometry args={[radius, 32, 32]} />
    <meshStandardMaterial color={color} />
  </mesh>
);

const Torus = ({ radius, tubeRadius, color, position, rotation }) => (
  <mesh position={position} rotation={rotation}>
    <torusGeometry args={[radius, tubeRadius, 16, 100]} />
    <meshStandardMaterial color={color} />
  </mesh>
);

const Cylinder = ({ radiusTop, radiusBottom, height, color, position, rotation }) => (
  <mesh position={position} rotation={rotation}>
    <cylinderGeometry args={[radiusTop, radiusBottom, height, 32]} />
    <meshStandardMaterial color={color} />
  </mesh>
);

const ThreeViewport = () => {
  const theme = useTheme();
  const [shapeType, setShapeType] = useState('cube');
  const [shapeProps, setShapeProps] = useState({
    size: 1,
    radius: 1,
    tubeRadius: 0.3,
    radiusTop: 1,
    radiusBottom: 1,
    height: 1,
    color: '#1976d2',
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
  });

  const handlePropChange = (prop) => (event) => {
    setShapeProps((prev) => ({
      ...prev,
      [prop]: event.target.value,
    }));
  };

  const renderShape = () => {
    const position = [
      parseFloat(shapeProps.positionX),
      parseFloat(shapeProps.positionY),
      parseFloat(shapeProps.positionZ),
    ];
    const rotation = [
      parseFloat(shapeProps.rotationX),
      parseFloat(shapeProps.rotationY),
      parseFloat(shapeProps.rotationZ),
    ];

    switch (shapeType) {
      case 'cube':
        return (
          <Cube
            size={parseFloat(shapeProps.size)}
            color={shapeProps.color}
            position={position}
            rotation={rotation}
          />
        );
      case 'sphere':
        return (
          <Sphere
            radius={parseFloat(shapeProps.radius)}
            color={shapeProps.color}
            position={position}
            rotation={rotation}
          />
        );
      case 'torus':
        return (
          <Torus
            radius={parseFloat(shapeProps.radius)}
            tubeRadius={parseFloat(shapeProps.tubeRadius)}
            color={shapeProps.color}
            position={position}
            rotation={rotation}
          />
        );
      case 'cylinder':
        return (
          <Cylinder
            radiusTop={parseFloat(shapeProps.radiusTop)}
            radiusBottom={parseFloat(shapeProps.radiusBottom)}
            height={parseFloat(shapeProps.height)}
            color={shapeProps.color}
            position={position}
            rotation={rotation}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100%', minHeight: 600 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              p: 2,
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Shape</InputLabel>
              <Select
                value={shapeType}
                onChange={(e) => setShapeType(e.target.value)}
                label="Shape"
              >
                <MenuItem value="cube">Cube</MenuItem>
                <MenuItem value="sphere">Sphere</MenuItem>
                <MenuItem value="torus">Torus</MenuItem>
                <MenuItem value="cylinder">Cylinder</MenuItem>
              </Select>
            </FormControl>

            {shapeType === 'cube' && (
              <TextField
                fullWidth
                label="Size"
                type="number"
                value={shapeProps.size}
                onChange={handlePropChange('size')}
                sx={{ mb: 2 }}
                slotProps={{
                  input: {
                    step: 0.1
                  }
                }}
              />
            )}

            {(shapeType === 'sphere' || shapeType === 'torus') && (
              <TextField
                fullWidth
                label="Radius"
                type="number"
                value={shapeProps.radius}
                onChange={handlePropChange('radius')}
                sx={{ mb: 2 }}
                slotProps={{
                  input: {
                    step: 0.1
                  }
                }}
              />
            )}

            {shapeType === 'torus' && (
              <TextField
                fullWidth
                label="Tube Radius"
                type="number"
                value={shapeProps.tubeRadius}
                onChange={handlePropChange('tubeRadius')}
                sx={{ mb: 2 }}
                slotProps={{
                  input: {
                    step: 0.1
                  }
                }}
              />
            )}

            {shapeType === 'cylinder' && (
              <TextField
                fullWidth
                label="Height"
                type="number"
                value={shapeProps.height}
                onChange={handlePropChange('height')}
                sx={{ mb: 2 }}
                slotProps={{
                  input: {
                    step: 0.1
                  }
                }}
              />
            )}

            {shapeType === 'cylinder' && (
              <TextField
                fullWidth
                label="Radius Top"
                type="number"
                value={shapeProps.radiusTop}
                onChange={handlePropChange('radiusTop')}
                sx={{ mb: 2 }}
                slotProps={{
                  input: {
                    step: 0.1
                  }
                }}
              />
            )}

            {shapeType === 'cylinder' && (
              <TextField
                fullWidth
                label="Radius Bottom"
                type="number"
                value={shapeProps.radiusBottom}
                onChange={handlePropChange('radiusBottom')}
                sx={{ mb: 2 }}
                slotProps={{
                  input: {
                    step: 0.1
                  }
                }}
              />
            )}

            <TextField
              fullWidth
              label="Color"
              type="color"
              value={shapeProps.color}
              onChange={handlePropChange('color')}
              sx={{ mb: 2 }}
            />

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="X"
                  type="number"
                  value={shapeProps.positionX}
                  onChange={handlePropChange('positionX')}
                  inputProps={{ step: 0.1 }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Y"
                  type="number"
                  value={shapeProps.positionY}
                  onChange={handlePropChange('positionY')}
                  inputProps={{ step: 0.1 }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Z"
                  type="number"
                  value={shapeProps.positionZ}
                  onChange={handlePropChange('positionZ')}
                  inputProps={{ step: 0.1 }}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Rot X"
                    type="number"
                    value={shapeProps.rotationX}
                    onChange={handlePropChange('rotationX')}
                    inputProps={{ step: 0.1 }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Rot Y"
                    type="number"
                    value={shapeProps.rotationY}
                    onChange={handlePropChange('rotationY')}
                    inputProps={{ step: 0.1 }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Rot Z"
                    type="number"
                    value={shapeProps.rotationZ}
                    onChange={handlePropChange('rotationZ')}
                    inputProps={{ step: 0.1 }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box
            sx={{
              height: '600px',
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Canvas camera={{ position: [3, 3, 3] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              {renderShape()}
              <OrbitControls />
              <gridHelper />
            </Canvas>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThreeViewport;
