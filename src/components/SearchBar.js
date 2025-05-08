import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SearchBar = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    style={{ position: 'sticky', top: '64px', zIndex: 1020, background: 'white' }}
  >
    <Container className="py-2 border-bottom">
      <nav className="navbar navbar-light bg-light px-3 rounded shadow-sm" style={{ transform: 'scale(0.95)', transition: 'transform 0.3s' }}>
        <form className="form-inline d-flex w-100">
          <input
            className="form-control mr-sm-2 flex-grow-1 me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              fontSize: '0.9rem',
              padding: '0.45rem 0.75rem',
            }}
            onFocus={(e) => e.target.closest('nav').style.transform = 'scale(1)'}
            onBlur={(e) => e.target.closest('nav').style.transform = 'scale(0.95)'}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </Container>
  </motion.div>
);

export default SearchBar;
