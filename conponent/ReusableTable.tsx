'use client';

import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';

type Column = {
  label: string;
  key: string;
  render?: (value: any, row: Record<string, any>) => React.ReactNode;
};

type Row = Record<string, any>;

type ReusableTableProps = {
  columns: Column[];
  rows: Row[];
  noDataImage?: string;
  noDataText?: string;
};

const ReusableTable: React.FC<ReusableTableProps> = ({
  columns,
  rows,
  noDataImage = '/icons/no-data.png',
  noDataText = 'No data available',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
        borderRadius: 2,
        border: '1px solid #E0E0E0',
        backgroundColor: '#fff',
        boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
      }}
    >
      <TableContainer sx={{ minWidth: 600 }}>
        {rows.length > 0 ? (
          <Table size={isMobile ? 'small' : 'medium'}>
            <TableHead sx={{ bgcolor: '#F6F6F6' }}>
              <TableRow>
                {columns.map((col, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: '#001C44',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  sx={{
                    '& td': {
                      borderBottom: 'none',
                      padding: isMobile ? '6px 12px' : '10px 16px',
                      fontSize: 14,
                      whiteSpace: 'nowrap',
                    },
                  }}
                >
                  {columns.map((col, colIndex) => (
                    <TableCell key={colIndex}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height={300}
            textAlign="center"
            gap={2}
            p={3}
          >
            <Image src={noDataImage} alt="No data" width={120} height={120} />
            <Typography variant="subtitle1" color="text.secondary">
              {noDataText}
            </Typography>
          </Box>
        )}
      </TableContainer>
    </Box>
  );
};

export default ReusableTable;
