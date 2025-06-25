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
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import { MoreHoriz, CheckCircle, Cancel, AccessTime } from '@mui/icons-material';

type Column = {
  label: string;
  key: string;
};

type Row = Record<string, any>;

type ReusableTableProps = {
  columns: Column[];
  rows: Row[];
  noDataImage?: string;
  noDataText?: string;
};

const getStatusFromAmount = (amount: string): 'Successful' | 'Failed' | 'Pending' => {
  if (amount.startsWith('+')) return 'Successful';
  if (amount.startsWith('-')) {
    // Random example: decide failed or pending
    return amount.includes('2') ? 'Failed' : 'Pending';
  }
  return 'Pending';
};

const getStatusStyle = (status: string) => {
  const map = {
    Successful: {
      color: '#34C759',
      bg: 'rgba(52, 199, 89, 0.1)',
      border: '#F2F2F2',
      icon: <CheckCircle sx={{ fontSize: 14, color: '#34C759' }} />,
    },
    Failed: {
      color: '#FF3B30',
      bg: 'rgba(255, 59, 48, 0.1)',
      border: '#F2F2F2',
      icon: <Cancel sx={{ fontSize: 14, color: '#FF3B30' }} />,
    },
    Pending: {
      color: '#FF9500',
      bg: 'rgba(255, 149, 0, 0.1)',
      border: '#F2F2F2',
      icon: <AccessTime sx={{ fontSize: 14, color: '#FF9500' }} />,
    },
  };

  return map[status as keyof typeof map];
};

const ReusableTable: React.FC<ReusableTableProps> = ({
  columns,
  rows,
  noDataImage = '/icons/no-data.png',
  noDataText = 'No data available',
}) => {
  return (
    <TableContainer>
      {rows.length > 0 ? (
        <Table>
          <TableHead sx={{ bgcolor: '#F6F6F6' }}>
            <TableRow>
              {columns.map((col, index) => (
                <TableCell key={index} sx={{ fontWeight: 600 }}>
                  {col.label}
                </TableCell>
              ))}
              <TableCell align="right" />
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, rowIndex) => {
              const status = getStatusFromAmount(row.amount);
              const { color,  border, icon } = getStatusStyle(status);

              return (
                <TableRow
                  key={rowIndex}
                  sx={{
                    '& td': {
                      borderBottom: 'none',
                      padding: '8px 16px',
                    },
                  }}
                >
                  {columns.map((col, colIndex) => (
                    <TableCell key={colIndex}>
                      {col.key === 'amount' ? (
                        <Typography
                          sx={{
                            color: row[col.key].startsWith('-') ? '#FF3B30' : '#34C759',
                            fontWeight: 500,
                          }}
                        >
                          {row[col.key]}
                        </Typography>
                      ) : col.key === 'status' ? (
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            width: 'auto',
                            height: '24px',
                            borderRadius: '6px',
                            border: `1px solid ${border}`,
                            padding: '4px 8px 4px 4px',
                          }}
                        >
                          {icon}
                          <Typography fontSize="12px" fontWeight={500} color={color}>
                            {status}
                          </Typography>
                        </Box>
                      ) : (
                        row[col.key]
                      )}
                    </TableCell>
                  ))}
                  <TableCell align="right">
                    <IconButton>
                      <MoreHoriz />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
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
  );
};

export default ReusableTable;
