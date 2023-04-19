import { useState, useEffect, useCallback } from 'react';
import { Box, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { useTheme } from '@emotion/react';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'friendlyName',
    numeric: false,
    disablePadding: false,
    label: 'Friendly Name',
  },
  {
    id: 'dnsName',
    numeric: false,
    disablePadding: false,
    label: 'DNS Name',
  },
  {
    id: 'environment',
    numeric: false,
    disablePadding: false,
    label: 'Environment',
  },
  {
    id: 'endDate',
    numeric: false,
    disablePadding: false,
    label: 'End Date',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'friendlyName';
const DEFAULT_ROWS_PER_PAGE = 10;

function EnhancedTableHead(props) {
  const theme = useTheme();
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (newOrderBy) => (event) => {
    onRequestSort(event, newOrderBy);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: theme.palette.black.dark }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export function TableView({ data, handleOpen }) {
  const theme = useTheme();
  const [order, setOrder] = useState(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = useState(DEFAULT_ORDER_BY);
  const [page] = useState(0);
  const [visibleRows, setVisibleRows] = useState(null);
  const [rowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
  const [paddingHeight] = useState(0);

  useEffect(() => {
    let rowsOnMount = stableSort(
      data,
      getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY)
    );

    rowsOnMount = rowsOnMount.slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
    );

    setVisibleRows(rowsOnMount);
  }, [data]);

  const handleRequestSort = useCallback(
    (event, newOrderBy) => {
      const isAsc = orderBy === newOrderBy && order === 'asc';
      const toggledOrder = isAsc ? 'desc' : 'asc';
      setOrder(toggledOrder);
      setOrderBy(newOrderBy);

      const sortedRows = stableSort(
        data,
        getComparator(toggledOrder, newOrderBy)
      );
      const updatedRows = sortedRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      );

      setVisibleRows(updatedRows);
    },
    [order, orderBy, page, rowsPerPage, data]
  );

  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size={'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {visibleRows
                ? visibleRows.map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={index}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell component='th' id={labelId} scope='row'>
                          {row.friendlyName}
                        </TableCell>
                        <TableCell>{row.dnsName}</TableCell>
                        <TableCell>{row.environment}</TableCell>
                        <TableCell>{row.endDate}</TableCell>
                        <TableCell>
                          <Button
                            sx={{
                              backgroundColor: theme.palette.secondary.main,
                              color: theme.palette.primary.light,
                              textTransform: 'initial',
                              padding: '8px 12px',
                              borderRadius: '4px',
                              border: `1px solid ${theme.palette.secondary.main}`,
                              '&:hover': {
                                color: theme.palette.secondary.main
                              }
                            }}
                            onClick={() => handleOpen(row)}
                          >
                            Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                : null}
              {paddingHeight > 0 && (
                <TableRow
                  style={{
                    height: paddingHeight,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
