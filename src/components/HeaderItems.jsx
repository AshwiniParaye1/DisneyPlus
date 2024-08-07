function HeaderItems({ name, Icon }) {
  return (
    <div className=" flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 text-white">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItems;
