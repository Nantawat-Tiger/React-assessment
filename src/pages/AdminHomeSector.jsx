import React from 'react';
import DataForm from './DataForm';
import DataTable from './DataTable';

function AdminHomeSector({ dataList, onAddData, onDelete, onDeleteAll }) {
  return (
        <>
        
        
        <DataForm onAddData={onAddData}/>
        <DataTable dataList={dataList} onDelete={onDelete} showActions={true} />

        <footer className="text-center mt-8">
        <button 
          onClick={onDeleteAll} 
          className="bg-red-500 text-white py-2 px-6 rounded-md text-xl font-bold"
        >
          Delete All
        </button>
      </footer>
        
        </>
  );
}

export default AdminHomeSector;
