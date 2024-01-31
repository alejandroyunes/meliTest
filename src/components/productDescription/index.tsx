import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import './product-description.scss'

interface ProductDescriptionProps {
  id: string
}

interface ProductDescriptionData {
  plain_text: string
}

export default function ProductDescription({ id }: ProductDescriptionProps) {
  const query = `/items/${id}/description`

  const { data, loading, error } = useFetchData(query) as { data: ProductDescriptionData | null, loading: boolean, error: Error | null }

  return (
    <main className='product-description__wrapper'>
      <div className='product-description__content'>

        <div className='product-description__description'>
          <h2>Descripción del producto</h2>
          {loading && <p>...Cargando</p>}

          {error && <p>Hubo un error cargando la descripción</p>}

          {!loading && !error && (
            <p>
              {data?.plain_text !== ''
                ? data?.plain_text
                : 'No hay descripción'}
            </p>
          )}
        </div>

      </div>
    </main>
  )
}
