import React from 'react'

const History = () => {
  return (
    < className=" flex flex-col gap-0.5">
      {/* preflop ~ river */}
      <StreetAction streetIndex={0} />

      <StreetAction streetIndex={1} />

      <StreetAction streetIndex={2} />

      <StreetAction streetIndex={3} />
      {/* {canEdit && (
        <>
          <Modal
            opened={isOpenCardSetter}
            onClose={() => setIsOpenCardSetter(false)}
          >
            <CardList />
          </Modal>
          <Modal
            opened={isOpenNumSetter}
            onClose={() => setIsOpenNumSetter(false)}
          >
            <NumSetter />
          </Modal>
        </>
      )} */}
    </>
  )
}

export default History
